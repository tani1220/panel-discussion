import { ClockIcon } from '@heroicons/react/solid'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Container } from 'src/components/share/Container'
import { ArticleList } from 'src/components/share/List'
import { getRoomData, getRoomIds } from 'src/lib/getRoomData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const RoomPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Container roomId={articles.roomId} left="title" right="menu" center="user" thread="chat">
        <div className="w-2/3 m-auto text-white text-center">
          <div>
            <h1 className="text-4xl p-10">{articles.ref.theme}</h1>
            <h2 className="mb-10">{articles.ref.discription}</h2>
            <div className="flex justify-center items-center mb-12">
              {articles.ref.date}
              <ClockIcon className="h-5 w-5 mx-1 text-gray-300" aria-hidden="true" />
              {articles.ref.time} 開始
            </div>
          </div>
        </div>

        <ArticleList article={articles} />
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getRoomIds()
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const articles = await getRoomData(params.roomId)

  return {
    props: {
      articles,
    },
  }
}

export default RoomPage
