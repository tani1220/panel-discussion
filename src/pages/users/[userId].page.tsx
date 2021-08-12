import { auth } from 'firebase/clientApp'
import { db } from 'firebase/clientApp'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container } from 'src/components/Container'
import { getUserData, getUserIds } from 'src/lib/getUserData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const UserHome: NextPage<Props> = ({ userData }) => {
  const router = useRouter()
  const [data, setData] = useState([{ theme: '' }])

  //認証情報がない場合はログイン画面に遷移
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      !user && router.push('/')
    })
    return () => unsubscribe()
  }, [])

  //お題UIDとユーザーUIDが一致していれば、そのデータを取得してstateに格納
  useEffect(() => {
    db.collection('contents')
      .where('uid', '==', userData.userId)
      .get()
      .then((querySnapshot) => {
        setData(querySnapshot.docs.map((doc) => ({ theme: doc.data().theme })))
      })
  }, [])

  return (
    <>
      <Container left="title" right="menu" center="admin">
        <p className="text-2xl font-mono text-gray-300 text-center my-5">作成したお題</p>
        <ul className="text-white">
          {data.map((item) => (
            <Link key={item.theme} href={`/rooms/${item.theme}`}>
              <div className="bg-gray-900 rounded-md mx-4 p-5 mt-5 cursor-pointer">
                <div className="flex-1 min-w-0">
                  <li className="text-2xl font-bold text-gray-100 sm:text-3xl hover:text-blue-500 cursor-pointer">
                    {item.theme}
                  </li>
                </div>
              </div>
            </Link>
          ))}
        </ul>
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

export default UserHome
