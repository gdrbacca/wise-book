// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// seleciona todos os books e ordena por media de rating, devolvendo só 4 se for passado selectType=half, senão todos

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const selectType = String(req.query.type)

  const book = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: {
        select: {
          rate: true,
        },
        orderBy: {
          rate: 'desc',
        },
      },
    },
  })
  // console.log(book)

  const booksRated = book.map((books) => {
    const soma = books.ratings.reduce((acumulador, objeto) => {
      return acumulador + objeto.rate
    }, 0)
    // console.log(soma)
    return {
      id: books.id,
      name: books.name,
      author: books.author,
      cover_url: books.cover_url,
      rateAverage: soma / books.ratings.length,
    }
  })
  booksRated.sort((a, b) => b.rateAverage - a.rateAverage)
  // console.log(booksRated)
  if (selectType === 'half') {
    return res.status(200).json(booksRated.slice(0, 4))
  } else {
    return res.status(200).json(booksRated)
  }
}
