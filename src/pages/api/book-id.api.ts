// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// passa o id do book e devolve o mesmo com name, author, summary e cover_url

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const id = String(req.query.id)
  // console.log(id)
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      author: true,
      summary: true,
      cover_url: true,
    },
  })
  // console.log(user)
  return res.status(200).json(book)
}
