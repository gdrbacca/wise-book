// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// seleciona 10 ratings ordenando por criação desc, ou se passar userId, devolve só os dele

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.userId)
  // console.log('userID: ' + userId)

  let ratings = null
  if (userId !== 'undefined') {
    ratings = await prisma.rating.findMany({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
        rate: true,
        description: true,
        created_at: true,
        book_id: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    const ratingFinal = await Promise.all(
      ratings.map(async (rating) => {
        const book = await prisma.book.findUnique({
          where: {
            id: rating.book_id,
          },

          select: {
            name: true,
            author: true,
            cover_url: true,
          },
        })
        return {
          id: rating.id,
          rate: rating.rate,
          description: rating.description,
          created_at: rating.created_at,
          author: book?.author,
          cover_url: book?.cover_url,
          name: book?.name,
        }
      }),
    )

    // console.log(ratingFinal)
    return res.status(200).json(ratingFinal)
  } else {
    ratings = await prisma.rating.findMany({
      take: 10,
      select: {
        id: true,
        rate: true,
        description: true,
        created_at: true,
        book_id: true,
        user_id: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return res.status(200).json(ratings)
  }
}
