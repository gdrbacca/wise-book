import { PopularBooks } from '@/components/books/PopularBooks'
import { ProfileBook } from '@/components/books/ProfileBook'
import {
  ContainerLogin,
  MainContainer,
  StyledPopup,
  YourBooksAndReviews,
} from './styles'
import { DetailedBook } from '@/components/books/DetailedBook'
import { useEffect, useState } from 'react'
import { PopularBooksProps } from '../home'
import { api } from '@/lib/axios'
import { signIn, useSession } from 'next-auth/react'
import googleLogo from '../../../public/googleLogo.svg'
import githubLogo from '../../../public/githubLogo.svg'
import Image from 'next/image'
import { ButtonContainer } from '../login/styles'

export default function Teste() {
  const [popularBooks, setPopularBooks] = useState<PopularBooksProps[]>()

  useEffect(() => {
    api.get('/books-rating').then((response) => {
      setPopularBooks(response.data)
    })
  }, [])
  const session = useSession()
  console.log(session)
  const isSignedIn = session.status === 'authenticated'
  console.log(session.status)

  async function handleConnectAccountGoogle() {
    await signIn('google', { callbackUrl: '/?page=explorar' })

    // if (session.status === 'authenticated') router.push('/')
  }
  async function handleConnectAccountGithub() {
    await signIn('github')
  }

  return (
    <MainContainer>
      <YourBooksAndReviews>
        popular books
        {popularBooks && (
          <PopularBooks key={popularBooks[0].id} book={popularBooks[0]} />
        )}
        <br />
        rating book
        <StyledPopup
          trigger={<button className="button"> Open Modal </button>}
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
        {/*  <RatingBook /> */}
        <br />
        <br />
        profile book
        <ProfileBook
          author="Robert C. Martin"
          cover_url="public/arquitetura-limpa.png"
          description="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet"
          name="Arquitetura limpa"
          rate={4}
        />
        <br />
        detailed book
        <DetailedBook bookId="0440ad7d-230e-4573-b455-84ca38b5d339" />
        <br />
        {/*  <RatingForm /> */}
      </YourBooksAndReviews>
      <div style={{ background: 'blue' }}></div>
    </MainContainer>
  )
}
