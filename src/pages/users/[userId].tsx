import { auth } from 'firebase/clientApp'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container } from 'src/components/share/Container'
import { getUserData, getUserIds } from 'src/lib/getUserData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const userPage: NextPage<Props> = ({ userData }) => {
  const router = useRouter()

  //認証情報がない場合はログイン画面に遷移
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      !user && router.push('/login')
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <Container>
        <div className="h-screen bg-white">
          <h1>ユーザーページ</h1>
          <p>{userData.userId}</p>
        </div>
      </Container>
    </>
  )
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
