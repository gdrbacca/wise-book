import '../lib/dayjs'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

globalStyles()

const queryClient = new QueryClient()

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className={`${nunito.className}`}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </div>
  )
}
