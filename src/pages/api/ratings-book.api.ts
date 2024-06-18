// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// passa o bookId e seleciona os ratings dele devolvendo seus ids

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const bookId = String(req.query.id)

  const ratings = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    select: {
      ratings: {
        select: {
          id: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  // console.log(ratings)
  return res.status(200).json(ratings)
}
