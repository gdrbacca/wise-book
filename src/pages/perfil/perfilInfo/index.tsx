import Image from 'next/image'
import { PerfilInfo, PerfilInfoHeader, TablePerfil } from './styles'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

interface PerfilInfoComponentProps {
  userId: string | undefined
  name: string | undefined
  coverUrl: string | undefined
  createdAt: string | undefined
}

interface PerfilInfoBooks {
  totalPaginas: number
  totalAutores: number
  totalBooks: number
  categoriaMaisLida: string
}

export function PerfilInfoComponent({
  userId,
  name,
  coverUrl,
  createdAt,
}: PerfilInfoComponentProps) {
  const [userInfo, setUserInfo] = useState<PerfilInfoBooks>()

  useEffect(() => {
    if (userId !== undefined) {
      api
        .get('/user-profile', {
          params: {
            userId,
          },
        })
        .then((response) => {
          setUserInfo(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [])

  return (
    <PerfilInfo>
      <PerfilInfoHeader>
        <Image
          src={coverUrl || '/placeholder-image.png'}
          width={80}
          height={80}
          alt=""
        />

        <h1>{name || '-'}</h1>
        <h2>membro desde {dayjs(createdAt).year()}</h2>
        <span></span>
      </PerfilInfoHeader>

      <TablePerfil>
        <tr>
          <td>
            <BookOpen size={34} />
          </td>
          <td>
            <tr>
              <span>
                {userInfo?.totalPaginas && userInfo?.totalPaginas > 0
                  ? userInfo?.totalPaginas
                  : 0}
              </span>
            </tr>
            <tr>
              <p>Páginas lidas</p>
            </tr>
          </td>
        </tr>
        <tr>
          <td>
            <Books size={34} />
          </td>
          <td>
            <tr>
              <span>
                {userInfo?.totalBooks && userInfo?.totalBooks > 0
                  ? userInfo?.totalBooks
                  : 0}
              </span>
            </tr>
            <tr>
              <p>Livros avaliados</p>
            </tr>
          </td>
        </tr>
        <tr>
          <td>
            <UserList size={34} />
          </td>
          <td>
            <tr>
              <span>
                {userInfo?.totalAutores && userInfo?.totalAutores > 0
                  ? userInfo?.totalAutores
                  : 0}
              </span>
            </tr>
            <tr>
              <p>Autores lidos</p>
            </tr>
          </td>
        </tr>
        <tr>
          <td>
            <BookmarkSimple size={34} />
          </td>
          <td>
            <tr>
              <span>
                {userInfo?.categoriaMaisLida &&
                userInfo?.categoriaMaisLida.length > 0
                  ? userInfo?.categoriaMaisLida
                  : '-'}
              </span>
            </tr>
            <tr>
              <p>Categoria mais lida</p>
            </tr>
          </td>
        </tr>
      </TablePerfil>
    </PerfilInfo>
  )
}
