import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'
import { buildNextAuthOptions } from './api/auth/[...nextauth].api'

export { default } from './home'

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  // console.log('sideprops')

  return {
    props: {
      session,
      queryProps: query.page ?? '',
    },
  }
}
