import { CaretRight, ChartLineUp } from 'phosphor-react'
import {
  MainContainer,
  MainContent,
  MainHeader,
  PopularBooksContainer,
  PopularBooksHeader,
  PopularBooksList,
  YourBooksAndReviews,
  YourBooksAndReviewsContent,
  YourBooksAndReviewsHeader,
} from './styles'
import { NormalBook } from '@/components/books/NormalBook'
import Link from 'next/link'
import { PopularBooksProps } from '..'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { PopularBooks } from '@/components/books/PopularBooks'
import { YourLastRead } from './yourlastread'
import { useSession } from 'next-auth/react'

interface RatingsUserProps {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
}

export function HomeInicio() {
  // const [users, setUsers] = useState<UserProps[]>()
  const [popularBooks, setPopularBooks] = useState<PopularBooksProps[]>() // para os livros da direita
  const [ratingsUser, setRatingsUser] = useState<RatingsUserProps[]>() // coluna do meio com as avaliações
  const [possuiLastRead, setPossuiLastRead] = useState<boolean>(true)

  const session = useSession()

  function handlePossuiLastRead(possuiLastRead: boolean) {
    setPossuiLastRead(possuiLastRead)
  }

  useEffect(() => {
    api.get('/ratings-user').then((response) => {
      setRatingsUser(response.data)
    })

    api.get('/books-rating', { params: { type: 'half' } }).then((response) => {
      setPopularBooks(response.data)
    })
  }, [])

  return (
    <MainContainer>
      <MainHeader>
        <ChartLineUp size={28} />
        <h1>Início</h1>
      </MainHeader>
      <MainContent>
        <YourBooksAndReviews>
          {session.status === 'authenticated' && possuiLastRead && (
            <YourLastRead
              userId={session.data.user.id}
              handlePossuiLastRead={handlePossuiLastRead}
            />
          )}

          <YourBooksAndReviewsHeader>
            Avaliações mais recentes
          </YourBooksAndReviewsHeader>
          <YourBooksAndReviewsContent>
            {ratingsUser?.map((ratingBook) => {
              return <NormalBook key={ratingBook.id} {...ratingBook} />
            })}
          </YourBooksAndReviewsContent>
        </YourBooksAndReviews>
        <PopularBooksContainer>
          <PopularBooksHeader>
            <p>Livros populares</p>
            <Link href={'/?page=explorar'}>
              <span>Ver todos</span>
              <CaretRight size={18} />
            </Link>
          </PopularBooksHeader>
          <PopularBooksList>
            <ul>
              {popularBooks?.map((popularBook) => {
                return (
                  <li key={popularBook.id}>
                    <PopularBooks key={popularBook.id} book={popularBook} />
                  </li>
                )
              })}
            </ul>
          </PopularBooksList>
        </PopularBooksContainer>
      </MainContent>
      {/* {users && users?.length > 0 ? (
        users?.map((user) => (
          <span key={user.name}>
            {user.name} e {user.avatar_url}
          </span>
        ))
      ) : (
        <></>
      )} */}
    </MainContainer>
  )
}
