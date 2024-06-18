import {
  ButtonMenu,
  FooterSidebar,
  SidebarButtonContainer,
  SidebarContainer,
} from './styles'
import logo from '../../../../public/LogoBookWise.png'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useSession, signOut } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

export interface ServerSideProps {
  queryProps: string | null
}

export function Sidebar({ queryProps }: ServerSideProps) {
  const [page, setPage] = useState<string | null>(null)
  const session = useSession()
  const isSignedIn = session.status === 'authenticated'
  const router = useRouter()
  // console.log('page: ' + page)
  // console.log(queryProps === '' ? 'nao veio' : 'veio props: ' + queryProps)

  if (page === null || page !== queryProps) setPage(queryProps ?? '')

  async function handleLogout() {
    await signOut()
  }

  async function handleLogin() {
    router.push('/login')
  }

  function handleClickMenu(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    /* router.query.page = event.currentTarget.id
    router.push(router) */
    router.push(
      {
        ...router,
        query: {
          ...router.query,
          page: event.currentTarget.id,
        },
      },
      undefined,
      {
        shallow: true,
      },
    )

    setPage(event.currentTarget.id)
  }

  return (
    <SidebarContainer>
      <Image src={logo} alt="" priority />

      <SidebarButtonContainer>
        <ButtonMenu
          id="inicio"
          selected={
            page === 'inicio' || page?.length === 0 || page === '/'
              ? 'yes'
              : 'no'
          }
          onClick={handleClickMenu}
        >
          <span></span>
          <ChartLineUp size={24} /> Início
        </ButtonMenu>
        <ButtonMenu
          id="explorar"
          selected={page === 'explorar' ? 'yes' : 'no'}
          onClick={handleClickMenu}
        >
          <span></span>
          <Binoculars size={24} /> Explorar
        </ButtonMenu>
        {isSignedIn && (
          <ButtonMenu
            id="perfil"
            selected={page === 'perfil' ? 'yes' : 'no'}
            onClick={handleClickMenu}
          >
            <span></span>
            <User size={24} /> Perfil
          </ButtonMenu>
        )}
      </SidebarButtonContainer>

      <FooterSidebar
        css={
          !isSignedIn
            ? { $$colorIcon: '$colors$green100' }
            : { $$colorIcon: 'red' }
        }
      >
        {!isSignedIn ? (
          <div>
            <h2>Fazer login</h2>
            <button onClick={handleLogin}>
              <SignIn size={24} />
            </button>
          </div>
        ) : (
          <div>
            <Image
              src={session.data.user.image! || ''}
              width={40}
              height={40}
              alt="profile"
            />
            <h2>
              {session.data.user.name.substring(
                0,
                session.data.user.name.indexOf(' '),
              )}
            </h2>
            <button onClick={handleLogout}>
              <SignOut size={24} />
            </button>
          </div>
        )}
      </FooterSidebar>
    </SidebarContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  console.log(params)
  console.log(query)
  return {
    props: {},
  }
}
