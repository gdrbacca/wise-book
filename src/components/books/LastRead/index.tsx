import {
  Container,
  LastReadBook,
  LastReadHeader,
  LastReadInfoContainer,
} from './styles'
import Image from 'next/image'
import { ReadMore } from '../NormalBook'
import { Rating } from '../Rating'
import dayjs from 'dayjs'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

interface LastReadProps {
  rate: number
  description: string
  created_at: string
  name: string
  author: string
  cover_url: string
}

export function LastRead({
  userId,
  handlePossuiLastRead,
}: {
  userId: string
  handlePossuiLastRead: (possuiLastRead: boolean) => void
}) {
  const {
    data: lastRead,
    isLoading,
    error,
  } = useSWR<LastReadProps, Error>(
    ['/api/last-read-rating', [{ param: 'id', value: userId }]],
    fetcher,
    { revalidateOnFocus: false, loadingTimeout: 5000 },
  )

  if (error) {
    console.log('o error bixo')
    console.log(error.message)
    handlePossuiLastRead(false)
  }
  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <Container>
      <Image
        src={`/${lastRead?.cover_url.split('/')[1]}` || '/placeholder.png'}
        alt="imagem"
        width={108}
        height={158}
      />
      <LastReadInfoContainer>
        <LastReadHeader>
          <span>{dayjs(lastRead?.created_at).fromNow()}</span>
          <Rating rating={lastRead?.rate ? lastRead.rate - 1 : -1} />
        </LastReadHeader>

        <LastReadBook>
          <div>
            <h1>{lastRead?.name}</h1>
            <h2>{lastRead?.author}</h2>
          </div>

          <ReadMore chars={200}>{String(lastRead?.description)}</ReadMore>
        </LastReadBook>
      </LastReadInfoContainer>
    </Container>
  )
}
