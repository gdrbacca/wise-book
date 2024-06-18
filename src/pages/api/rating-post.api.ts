// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// passa o id, rating text e rate para gravar

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { userId, bookId, ratingText, rate } = req.body

  /* console.log({
    userId,
    bookId,
    ratingText,
    rate,
  }) */

  const ratingCreated = await prisma.rating.create({
    data: {
      description: ratingText,
      rate,
      user_id: userId,
      book_id: bookId,
    },
  })

  // console.log(user)
  return res.status(201).json(ratingCreated)
}
