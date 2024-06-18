import * as Dialog from '@radix-ui/react-dialog'
import { ExploreBooks } from '@/components/books/ExploreBooks'
import {
  ButtonExploreBook,
  HeaderExplorar,
  ListExploreBooks,
  MainContainerExplorar,
} from './styles'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { PopularBooksProps } from '../home'
import { NewRatingModal } from '../newRatingModal'
import { Helmet } from 'react-helmet'

export function Explorar() {
  const [books, setBooks] = useState<PopularBooksProps[]>()
  const [searchTerm, setSearchTerm] = useState('')
  const [bookId, setBookId] = useState('')

  useEffect(() => {
    fetch('/api/books-rating?type=full')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setBooks(data)
      })
  }, [])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredBooks = books?.filter((book) => {
    return (
      book.name
        .toLowerCase()
        .includes(searchTerm.length >= 3 ? searchTerm.toLowerCase() : '') ||
      book.author
        .toLowerCase()
        .includes(searchTerm.length >= 3 ? searchTerm.toLowerCase() : '')
    )
  })

  function hanbleButtonExploreBook(id: string) {
    setBookId(id)
  }

  return (
    <MainContainerExplorar>
      <Helmet>
        <title>Explorar</title>
      </Helmet>
      <HeaderExplorar>
        <div>
          <Binoculars size={30} />
          <h1>Explorar</h1>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <MagnifyingGlass size={18} />
        </form>
      </HeaderExplorar>
      <ListExploreBooks>
        <ul>
          <Dialog.Root>
            {filteredBooks?.map((book) => {
              return (
                <li key={book.id}>
                  <Dialog.Trigger asChild>
                    <ButtonExploreBook
                      onClick={() => hanbleButtonExploreBook(book.id)}
                    >
                      <ExploreBooks book={book} />
                    </ButtonExploreBook>
                  </Dialog.Trigger>
                </li>
              )
            })}

            <NewRatingModal bookId={bookId} />
          </Dialog.Root>
        </ul>
      </ListExploreBooks>
    </MainContainerExplorar>
  )
}
