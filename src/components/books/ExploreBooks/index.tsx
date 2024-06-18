import Image from 'next/image'
import { Container, ExploreBooksContent } from './styles'
import { Rating } from '../Rating'
import { PopularBooksProps } from '@/pages/home'

interface PopularBookContent {
  book: PopularBooksProps
}

export function ExploreBooks({ book }: PopularBookContent) {
  /* console.log('explore book')
  console.log(book.id)
  console.log(book.name) */
  console.log(book?.cover_url)
  return (
    <>
      {/* <Dialog.Root>
        <Dialog.Trigger asChild> */}
      <Container>
        <Image
          src={`/${book?.cover_url.split('/')[1]}`}
          alt="explore"
          width={108}
          height={152}
        />

        <ExploreBooksContent>
          <div>
            <h1>{book.name}</h1>
            <h2>{book.author}</h2>
          </div>

          <Rating rating={book.rateAverage - 1} />
        </ExploreBooksContent>
      </Container>
      {/* </Dialog.Trigger>

        <NewRatingModal bookId={book.id} />
      </Dialog.Root> */}
    </>
  )
}
