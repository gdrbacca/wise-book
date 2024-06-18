import { Sidebar } from './sidebar/Sidebar'

import { useSession } from 'next-auth/react'
import Helmet from 'react-helmet'

import { HomeInicio } from './homeinicio'
import { useRouter } from 'next/router'
import { Explorar } from '../explorar'
import { useEffect, useState } from 'react'
import { Perfil } from '../perfil'

export interface ServerSideProps {
  queryProps: string | null
}

export interface PopularBooksProps {
  id: string
  name: string
  author: string
  cover_url: string
  rateAverage: number
}

export default function Home({ queryProps }: ServerSideProps) {
  // const [users, setUsers] = useState<UserProps[]>()
  // const [popularBooks, setPopularBooks] = useState<PopularBooksProps[]>()
  const [page, setPage] = useState('')
  const session = useSession()
  const router = useRouter()
  console.log('queryprops: ' + queryProps)

  useEffect(() => {
    if (router.query.page === undefined) setPage('/')
    else setPage(String(router.query.page))
  }, [router.query, page])

  return (
    <div>
      <Helmet>
        <title>
          {session.status === 'authenticated'
            ? 'Home | Authenticated'
            : 'Home | unauthenticated'}
        </title>
      </Helmet>
      <Sidebar queryProps={page || queryProps} />

      {(() => {
        switch (page) {
          case 'inicio':
          case '/':
            return <HomeInicio />
          case 'explorar':
            return <Explorar />
          case 'perfil':
            return <Perfil />
        }
      })()}

      {/* <Explorar /> */}
      {/* <HomeInicio /> */}
    </div>
  )
}

/*
router.push(
      {
        ...router,
        query: {
          ...router.query,
          menu: 'inicio',
        },
      },
      undefined,
      { shallow: true },
    ) */
