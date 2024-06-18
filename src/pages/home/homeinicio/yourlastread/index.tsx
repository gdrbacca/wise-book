import { LastRead } from '@/components/books/LastRead'
import { Container, YourLastReadHeader } from './styles'
import { CaretRight } from 'phosphor-react'
import Link from 'next/link'

interface YourLastReadProps {
  userId: string
  handlePossuiLastRead: (possuiLastRead: boolean) => void
}

export function YourLastRead(props: YourLastReadProps) {
  function handlePossuiLastRead(possuiLastRead: boolean) {
    props.handlePossuiLastRead(possuiLastRead)
  }

  return (
    <Container>
      <YourLastReadHeader>
        Sua última leitura
        <Link href={'/?page=perfil'}>
          <span>Ver todas</span>
          <CaretRight size={18} />
        </Link>
      </YourLastReadHeader>
      <LastRead
        userId={props.userId}
        handlePossuiLastRead={handlePossuiLastRead}
      />
    </Container>
  )
}
