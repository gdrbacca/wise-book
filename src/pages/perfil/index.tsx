import { MagnifyingGlass, User } from 'phosphor-react'
import {
  Container,
  PerfilBookSection,
  PerfilBooks,
  PerfilContent,
  PerfilHeader,
} from './styles'
import { ProfileBook } from '@/components/books/ProfileBook'
import { PerfilInfoComponent } from './perfilInfo'
import { useSession } from 'next-auth/react'
import { Helmet } from 'react-helmet'
import { ChangeEvent, useState } from 'react'
import dayjs from 'dayjs'
import useFetch from 'react-fetch-hook'
import { useRouter } from 'next/router'

interface RatingsUserProps {
  id: string
  rate: number
  description: string
  created_at: string
  author: string
  cover_url: string
  name: string
}

export function Perfil() {
  const session = useSession()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  if (session.status === 'unauthenticated') {
    router.push('/?page=inicio')
  }

  const { data: ratingsUser } = useFetch<RatingsUserProps[]>(
    `/api/ratings-user?userId=${session.data?.user.id}`,
  )

  function handleSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.currentTarget.value)
  }

  const filteredRatings = ratingsUser?.filter((rating) => {
    return rating.name
      .toLowerCase()
      .includes(searchTerm.length >= 3 ? searchTerm.toLowerCase() : '')
  })

  return (
    <main>
      <Container>
        <Helmet>
          <title>WiseBook - Perfil</title>
        </Helmet>

        <PerfilHeader>
          <User size={30} />
          <h1>Perfil</h1>
        </PerfilHeader>

        <PerfilContent>
          <form action="">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchTerm}
              placeholder="Buscar livro avaliado"
            />
            <MagnifyingGlass size={18} />
          </form>
          <PerfilBooks>
            {filteredRatings?.map((rating) => {
              return (
                <PerfilBookSection key={rating?.id}>
                  <span>{dayjs(rating.created_at).fromNow()}</span>
                  <ProfileBook
                    description={rating?.description}
                    rate={rating?.rate}
                    author={rating.author}
                    cover_url={rating.cover_url}
                    name={rating.name}
                  />
                </PerfilBookSection>
              )
            })}
          </PerfilBooks>
        </PerfilContent>
      </Container>

      <PerfilInfoComponent
        userId={session.data?.user.id}
        name={session.data?.user.name}
        coverUrl={session.data?.user.image}
        createdAt={session.data?.user.createdAt}
      />
    </main>
  )
}
