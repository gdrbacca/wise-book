import NextAuth, { NextAuthOptions } from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import GoogleProvider /* , { GoogleProfile } */ from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '@/lib/prisma'

export function buildNextAuthOptions(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  req: NextApiRequest | NextPageContext['req'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        allowDangerousEmailAccountLinking: true,
        /* profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            username: '',
            email: profile.email,
            avatar_url: profile.picture,
          }
        }, */
      }),

      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
        allowDangerousEmailAccountLinking: true,
      }),
      // ...add more providers here
    ],

    callbacks: {
      async session({ session, user }) {
        // console.log(String(user.createdAt))
        // console.log('Callback')
        return {
          ...session,
          user: {
            ...user,
            emailVerified: String(user.emailVerified),
            createdAt: String(user.createdAt),
            updatedAt: String(user.updatedAt),
          },
        }
      },
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}
