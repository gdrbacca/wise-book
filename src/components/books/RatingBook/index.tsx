import Image from 'next/image'
import { Rating } from '../Rating'
import { Container, RatingBookHeader, RatingBookProfile } from './styles'
import dayjs from 'dayjs'
import { ReadMore } from '../NormalBook'
import { fetcher } from '@/lib/fetcher'
import useSWR from 'swr'

interface RatingBookProps {
  id: string
  userId: string | undefined
}

interface RatingBookContentProps {
  description: string | undefined
  rate: number | undefined
  created_at: Date | undefined
  userName: string | undefined
  userImage: string | undefined
  userId: string | undefined
}

export function RatingBook({ id, userId }: RatingBookProps) {
  const { data: rating } = useSWR<RatingBookContentProps>(
    ['/api/ratings-id', [{ param: 'id', value: id }]],
    fetcher,
    {
      revalidateOnFocus: false,
    },
  )

  return (
    <Container
      bgcolor={userId && userId === rating?.userId ? 'lighter' : 'darker'}
    >
      <RatingBookHeader>
        <RatingBookProfile>
          <Image
            src={
              rating?.userImage ? rating?.userImage : '/placeholder-image.png'
            }
            alt="profile"
            width={60}
            height={60}
          />

          <div>
            <h1>{rating?.userName}</h1>
            <h2>{dayjs(rating?.created_at).fromNow()}</h2>
          </div>
        </RatingBookProfile>

        <Rating rating={rating?.rate ? rating?.rate - 1 : 1} />
      </RatingBookHeader>

      <ReadMore chars={300}>{String(rating?.description)}</ReadMore>
    </Container>
  )
}
