import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    image: string
    email: string
    emailVerified: string | null
    createdAt: string
    updatedAt: string
  }

  interface Session {
    user: User
    expires: string
  }
}
