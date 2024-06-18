import Image from 'next/image'
import { Container, PopularBookContent } from './styles'
import { Rating } from '../Rating'
import { PopularBooksProps } from '../../../pages/home/index'

interface PopularBookContent {
  book: PopularBooksProps
}

export function PopularBooks({ book }: PopularBookContent) {
  // const [averageRating, setAverageRating] = useState(0)

  return (
    <Container>
      <Image
        src={`/${book.cover_url.split('/')[1]}`}
        alt="book"
        width={64}
        height={94}
      />
      <PopularBookContent>
        <div>
          <h1>{book.name}</h1>
          <h2>{book.author}</h2>
        </div>

        <Rating rating={book.rateAverage - 1} />
      </PopularBookContent>
    </Container>
  )
}
