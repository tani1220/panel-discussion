import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Container } from 'src/components/Container'
import { getUserData, getUserId } from 'src/lib/getUserData'

import { useUser } from './useUser'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const UserHome: NextPage<Props> = ({ userData }) => {
  const { data } = useUser(userData.userId)

  return (
    <>
      <Container left="title" right="menu" center="admin">
        <p className="text-2xl font-mono text-gray-300 text-center my-5">作成したお題</p>

        {data.length > 0 ? (
          <ul className="text-gray-100 sm:text-3xl font-bold text-2xl">
            {data.map((item) => (
              <Link key={item.theme} href={`/room/${item.theme}`}>
                <li className="bg-gray-900 rounded-md mx-4 p-5 mt-5 cursor-pointer hover:text-blue-500">
                  {item.theme}
                </li>
              </Link>
            ))}
          </ul>
        ) : null}
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getUserId()

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

export default UserHome
