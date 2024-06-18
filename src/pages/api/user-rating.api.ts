// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// passa o id do user e devolve name e image dele

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const userId = String(req.query.id)

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      name: true,
      image: true,
      ratings: false,
    },
  })
  // console.log(user)
  return res.status(200).json({
    name: user?.name,
    avatar_url: user?.image,
  })
}
