import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  ButtonAvaliar,
  CloseButton,
  ContainerLogin,
  Content,
  Overlay,
  RatingsContent,
  RatingsContentHeader,
  RatingsContentList,
  StyledPopup,
} from './styles'
import { DetailedBook } from '@/components/books/DetailedBook'
import { useState } from 'react'
import { RatingForm } from '@/components/ratingForm'
import { api } from '@/lib/axios'
import { RatingBook } from '@/components/books/RatingBook'
import { signIn, useSession } from 'next-auth/react'
import { ButtonContainer } from '../login/styles'

import googleLogo from '../../../public/googleLogo.svg'
import githubLogo from '../../../public/githubLogo.svg'
import { useQuery } from '@tanstack/react-query'

interface RatingModalProps {
  bookId: string
}

interface RatingsBookContent {
  ratings: { id: string }[]
}

export function NewRatingModal({ bookId }: RatingModalProps) {
  const [avaliar, setAvaliar] = useState<boolean>(false)
  const [create, setCreate] = useState<boolean>(false)

  const session = useSession()
  const isSignedIn = session.status === 'authenticated'

  const { data: ratingsIds } = useQuery<RatingsBookContent>({
    queryKey: ['ratings-book', bookId, create],
    queryFn: async () => {
      const response = await api.get(`/ratings-book`, {
        params: {
          id: bookId,
        },
      })

      return response.data
    },
  })

  // console.log('pasou com id: ' + bookId)
  function handlerAvaliar() {
    if (!avaliar && session.status === 'unauthenticated') {
      alert('n ao logado')
    } else setAvaliar(!avaliar)
  }

  function handleCreate() {
    setCreate(!create)
  }

  async function handleConnectAccountGoogle() {
    await signIn('google', { callbackUrl: '/?page=explorar' })

    // if (session.status === 'authenticated') router.push('/')
  }
  async function handleConnectAccountGithub() {
    await signIn('github', { callbackUrl: '/?page=perfil' })
  }

  return (
    <div>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <CloseButton>
              <X size={24} />
            </CloseButton>
            <DetailedBook bookId={bookId} />

            <RatingsContent>
              <RatingsContentHeader>
                <h2>Avaliações</h2>
                {isSignedIn ? (
                  <ButtonAvaliar onClick={handlerAvaliar}>
                    Avaliar
                  </ButtonAvaliar>
                ) : (
                  <StyledPopup
                    trigger={<ButtonAvaliar>Avaliar</ButtonAvaliar>}
                    modal
                    nested
                  >
                    <ContainerLogin>
                      <span>Faça login para deixar sua avaliação</span>
                      <ButtonContainer>
                        <button
                          onClick={handleConnectAccountGoogle}
                          disabled={isSignedIn}
                        >
                          <Image src={googleLogo} alt="" /> Entrar com Google
                        </button>
                        <button
                          onClick={handleConnectAccountGithub}
                          disabled={isSignedIn}
                        >
                          <Image src={githubLogo} alt="" /> Entrar com Github
                        </button>
                      </ButtonContainer>
                    </ContainerLogin>
                  </StyledPopup>
                )}
              </RatingsContentHeader>
              {avaliar && (
                <RatingForm
                  userId={session.data?.user.id}
                  bookId={bookId}
                  cover_url={session.data?.user.image}
                  name={session.data?.user.name}
                  avaliar={handlerAvaliar}
                  create={handleCreate}
                />
              )}
              <RatingsContentList>
                {ratingsIds?.ratings.map((ratings) => {
                  return (
                    <RatingBook
                      key={ratings.id}
                      id={ratings.id}
                      userId={session.data?.user.id}
                    />
                  )
                })}
              </RatingsContentList>
            </RatingsContent>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </div>
  )
}
