// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// passa o id do book e devolve o book, com categorias, além da media de rating e quantidade de rate

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const id = String(req.query.id)
  console.log('id complete: ' + id)
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      author: true,
      cover_url: true,
      total_pages: true,
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  const ratings = await prisma.rating.findMany({
    where: {
      book_id: id,
    },
    select: {
      rate: true,
    },
  })

  const soma = ratings.reduce((acumulador, objeto) => {
    return acumulador + objeto.rate
  }, 0)

  /* console.log({
    ...book,
    averageRate: soma / ratings.length,
  }) */
  return res.status(200).json({
    ...book,
    averageRate: soma / ratings.length,
    ratingsLength: ratings.length,
  })
}
