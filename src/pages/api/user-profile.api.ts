// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// seleciona dados para aparecer no perfil do lado direito

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.userId)

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },

    select: {
      book_id: true,
    },
  })

  const autoresDif: string[] = []
  const livrosDif: string[] = []
  const categories: {
    name: string
    count: number
  }[] = []

  const books = await ratings.reduce(
    async (prev, rating) => {
      const acc = await prev

      const book = await prisma.book.findUnique({
        where: {
          id: rating.book_id,
        },

        select: {
          author: true,
          total_pages: true,
          categories: true,
        },
      })

      const categoriesBook = await prisma.categoriesOnBooks.findMany({
        where: {
          book_id: rating.book_id,
        },

        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      })

      // calcula numero de cada categoria
      categoriesBook.forEach(({ category }) => {
        const index = categories.findIndex((value) => {
          return value.name === category.name
        })

        if (index !== -1) {
          categories[index].count += 1
        } else {
          categories.push({
            name: category.name,
            count: 1,
          })
        }
      })

      categories.sort((a, b) => b.count - a.count)

      // console.log(categories)
      if (book?.author && !autoresDif.includes(book?.author)) {
        autoresDif.push(book?.author)
        acc.autores += 1
      }
      if (!livrosDif.includes(rating.book_id)) {
        livrosDif.push(rating.book_id)
        acc.livros += 1
        acc.paginas += book?.total_pages ? book?.total_pages : 0
      }

      return acc
    },
    Promise.resolve({
      paginas: 0,
      autores: 0,
      livros: 0,
    }),
  )
  // }

  // console.log(books)
  // console.log(categories)

  if (ratings === undefined || ratings.length <= 0) {
    return res.status(404).end()
  } else {
    return res.status(200).json({
      totalPaginas: books.paginas,
      totalAutores: books.autores,
      totalBooks: books.livros,
      categoriaMaisLida: categories[0].name,
    })
  }
}
