// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// passa o id do rating e devolve informações de rating e user

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const ratingId = String(req.query.id)

  const rating = await prisma.rating.findUnique({
    where: {
      id: ratingId,
    },
    select: {
      description: true,
      rate: true,
      user_id: true,
      created_at: true,
    },
  })

  console.log(ratingId)
  if (rating == null) {
    return res.status(404).end()
  }

  const user = await prisma.user.findUnique({
    where: {
      id: rating?.user_id,
    },
    select: {
      id: true,
      name: true,
      image: true,
    },
  })
  // console.log(user)
  return res.status(200).json({
    description: rating?.description,
    rate: rating?.rate,
    created_at: rating?.created_at,
    userName: user?.name,
    userImage: user?.image,
    userId: user?.id,
  })
}
