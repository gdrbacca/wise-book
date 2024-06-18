import Image from 'next/image'
import {
  Container,
  ContentNormalBook,
  HeaderNormalBook,
  NormalBookDescription,
  ProfileNormalBook,
  TextShowMore,
} from './styles'

import { useEffect, useState } from 'react'
import { Rating } from '../Rating'
import dayjs from 'dayjs'

interface NormalBookProps {
  id: string
  rate: number
  description: string
  created_at: string
  book_id: string
  user_id: string
}

interface Book {
  name: string
  author: string
  summary: string
  cover_url: string
}

interface User {
  name: string
  avatar_url: string
}

interface ReadMore {
  children: string
  chars: number
}

export const ReadMore = ({ children, chars }: ReadMore) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  if (text.length <= chars) return text

  return (
    <TextShowMore>
      {isReadMore ? text.slice(0, chars) : text}
      <span onClick={toggleReadMore}>
        {isReadMore ? '...ver mais' : ' mostrar menos'}
      </span>
    </TextShowMore>
  )
}

// id - rating
export function NormalBook(bookRating: NormalBookProps) {
  const [normalBook, setNormalBook] = useState<Book>()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    fetch(`/api/book-id?id=${bookRating.book_id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setNormalBook(data)
      })

    fetch(`/api/user-rating?id=${bookRating.user_id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setUser(data)
      })
  }, [])

  return (
    <Container>
      <HeaderNormalBook>
        <ProfileNormalBook>
          <Image
            src={user?.avatar_url || '/placeholder-image.png'}
            alt="profile"
            width={60}
            height={60}
          />
          <div>
            <h1>{user?.name}</h1>
            <h3>{dayjs(bookRating.created_at).fromNow()}</h3>
          </div>
        </ProfileNormalBook>

        <Rating rating={bookRating.rate - 1} />
      </HeaderNormalBook>
      <ContentNormalBook>
        <Image
          src={`/${normalBook?.cover_url.split('/')[1]}`}
          alt="livro"
          width={108}
          height={152}
        />
        <NormalBookDescription>
          <div>
            <h1>{normalBook?.name}</h1>
            <h3>{normalBook?.author}</h3>
          </div>

          <ReadMore chars={300}>{String(normalBook?.summary)}</ReadMore>
        </NormalBookDescription>
      </ContentNormalBook>
    </Container>
  )
}
