import Image from 'next/image'
import { Container, ProfileBookContent, ProfileBookHeader } from './styles'
import { Rating } from '../Rating'
import { useState } from 'react'
import { TextShowMore } from '../NormalBook/styles'

interface ProfileBookProps {
  rate: number | undefined
  description: string | undefined
  author: string | undefined
  cover_url: string | undefined
  name: string | undefined
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

export function ProfileBook(props: ProfileBookProps) {
  return (
    <Container>
      <ProfileBookHeader>
        <Image
          src={
            `/${props.cover_url && props?.cover_url.split('/')[1]}` ||
            '/placeholder-image.png'
          }
          alt=""
          width={98}
          height={134}
        />

        <ProfileBookContent>
          <div>
            <h1>{props?.name}</h1>
            <h2>{props?.author}</h2>
          </div>

          <Rating rating={props.rate ? props.rate - 1 : -1} />
        </ProfileBookContent>
      </ProfileBookHeader>

      <ReadMore chars={300}>{String(props.description)}</ReadMore>
    </Container>
  )
}
