import { Star } from 'phosphor-react'
import { Container } from './styles'
import { FormEvent, useEffect, useState } from 'react'

const stars = Array.from(Array(5).keys())

interface RatingProps {
  rating?: number
  size?: number
  setCounting?: (counter: number) => void
}

// rating: number
export function Rating({ rating, size = 20, setCounting }: RatingProps) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()
  const [starSelected, setStarSelected] = useState<boolean>(false)

  useEffect(() => {
    if (rating !== undefined && rating >= 0) setActiveIndex(rating)
  }, [rating])

  function handleClickStar(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (rating === undefined) {
      setActiveIndex(Number(event.currentTarget.value))
      if (setCounting)
        setCounting(
          starSelected === false ? Number(event.currentTarget.value) + 1 : 0,
        )
      setStarSelected(!starSelected)
    }
  }
  return (
    <Container>
      {stars.map((star) => {
        return (
          <button
            onClick={handleClickStar}
            key={star}
            value={star}
            style={{
              all: 'unset',
              cursor: 'pointer',
              lineHeight: 0,
            }}
          >
            <Star
              size={size}
              weight={star <= activeIndex! ? 'fill' : 'regular'}
              onMouseOver={() => {
                rating === undefined && !starSelected && setActiveIndex(star)
              }}
              onMouseLeave={() => {
                rating === undefined &&
                  !starSelected &&
                  setActiveIndex((oldstate) =>
                    oldstate === star ? undefined : star,
                  )
              }}
            />
          </button>
        )
      })}
    </Container>
  )
}
