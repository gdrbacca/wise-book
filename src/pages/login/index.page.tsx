import Image from 'next/image'
import {
  ButtonContainer,
  Container,
  ImageBackground,
  LoginContainer,
} from './styles'

import imageBackground from '../../../public/imagemHome.png'
import googleLogo from '../../../public/googleLogo.svg'
import githubLogo from '../../../public/githubLogo.svg'
import aviaoLogo from '../../../public/aviaoLogo.svg'
import { signIn, useSession } from 'next-auth/react'
import { ArrowBendDoubleUpRight } from 'phosphor-react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'

export default function Login() {
  const session = useSession()
  const router = useRouter()

  // console.log(session)
  const isSignedIn = session.status === 'authenticated'
  console.log(session.status)

  async function handleConnectAccountGoogle() {
    await signIn('google', { callbackUrl: '/' })

    // if (session.status === 'authenticated') router.push('/')
  }
  async function handleConnectAccountGithub() {
    await signIn('github', { callbackUrl: '/' })
  }

  async function handleAccessHome() {
    await router.push('/')
  }

  return (
    <Container>
      <ImageBackground>
        <Image alt="" src={imageBackground} />
      </ImageBackground>
      <LoginContainer>
        <h1>Boas vindas!</h1>
        {!isSignedIn && <h2>Faça seu login ou acesse como visitante</h2>}
        <ButtonContainer>
          <button onClick={handleConnectAccountGoogle} disabled={isSignedIn}>
            <Image src={googleLogo} alt="" /> Entrar com Google
          </button>
          <button onClick={handleConnectAccountGithub} disabled={isSignedIn}>
            <Image src={githubLogo} alt="" /> Entrar com Github
          </button>
          {isSignedIn ? (
            <button onClick={handleAccessHome}>
              <ArrowBendDoubleUpRight /> Acessar a Home
            </button>
          ) : (
            <button onClick={handleAccessHome} disabled={isSignedIn}>
              <Image src={aviaoLogo} alt="" /> Acessar como visitante
            </button>
          )}
        </ButtonContainer>
      </LoginContainer>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  return {
    props: { session, queryprops: 'oi' },
  }
}
