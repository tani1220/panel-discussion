import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getUserData, getUserIds } from 'src/lib/getUserData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const userPage: NextPage<Props> = ({ userData }) => {
  return <>{userData.userId}</>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getUserIds()

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const userData = await getUserData(params.userId)

  return {
    props: {
      userData,
    },
  }
}

export default userPage
