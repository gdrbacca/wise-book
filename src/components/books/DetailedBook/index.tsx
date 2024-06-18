import {
  BookDetailedCategories,
  BookDetails,
  Container,
  DetailedBookFooter,
  DetailedBookInfo,
  DetailedBookMain,
} from './styles'
import Image from 'next/image'
import { Rating } from '../Rating'
import { BookOpen, BookmarkSimple } from 'phosphor-react'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

interface DetailedBookId {
  bookId: string
}

interface Categories {
  category: { name: string }
}

interface DetailedBook {
  name: string
  author: string
  cover_url: string
  total_pages: number
  categories: Categories[]
  averageRate: number
  ratingsLength: number
}

/* async function fetcher([url, bookId]: [{ url: string }, { bookId: string }]) {
  const res = await fetch(`${url}?id=${bookId}`)
  return res.json()
} */

export function DetailedBook({ bookId }: DetailedBookId) {
  const { data: detailed } = useSWR<DetailedBook>(
    ['/api/book-id-complete', [{ param: 'id', value: bookId }]],
    fetcher,
    {
      revalidateOnFocus: false,
    },
  )

  // console.log('data: ' + detailed)
  return (
    <Container>
      <DetailedBookMain>
        <Image
          src={`/${detailed?.cover_url.split('/')[1]}`}
          alt=""
          width={172}
          height={242}
          unoptimized
        />

        <DetailedBookInfo>
          <div>
            <h1>{detailed?.name}</h1>
            <h2>{detailed?.author}</h2>
          </div>

          <div>
            <Rating
              rating={detailed?.averageRate && detailed?.averageRate - 1}
            />
            <span>{`${detailed?.ratingsLength} ${detailed?.ratingsLength === 1 ? 'avaliação' : 'avaliações'}`}</span>
          </div>
        </DetailedBookInfo>
      </DetailedBookMain>

      <DetailedBookFooter>
        <BookDetails>
          <BookmarkSimple size={24} />

          <div>
            <span>Categoria</span>
            <BookDetailedCategories>
              {detailed?.categories.map(({ category }, index) => {
                return (
                  <h2 key={index}>
                    {category.name}
                    {index !== detailed.categories.length - 1 && <>,&nbsp;</>}
                  </h2>
                )
              })}
            </BookDetailedCategories>
          </div>
        </BookDetails>
        <BookDetails>
          <BookOpen size={24} />

          <div>
            <span>Páginas</span>
            <BookDetailedCategories>
              <h2>{detailed?.total_pages}</h2>
            </BookDetailedCategories>
          </div>
        </BookDetails>
      </DetailedBookFooter>
    </Container>
  )
}
