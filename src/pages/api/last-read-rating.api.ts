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

  const userId = String(req.query.id)

  const rating = await prisma.rating.findMany({
    take: 1,
    where: {
      user_id: userId,
    },
    select: {
      description: true,
      created_at: true,
      rate: true,
      book_id: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })
  console.log('rating.lenght: ' + rating.length)

  if (rating !== undefined && rating.length > 0) {
    const book = await prisma.book.findUnique({
      where: {
        id: rating[0].book_id,
      },

      select: {
        name: true,
        author: true,
        cover_url: true,
      },
    })

    return res.status(200).json({
      rate: rating[0].rate,
      description: rating[0].description,
      created_at: rating[0].created_at,
      name: book?.name,
      author: book?.author,
      cover_url: book?.cover_url,
    })
  } else {
    return res.status(404).end()
  }
}
