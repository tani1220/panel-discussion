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
        <div className="sm:w-2/3 w-11/12 m-auto text-white text-center font-mono">
          <div>
            <h1 className="sm:text-4xl text-xl sm:p-10 p-4">{articles.ref.theme}</h1>
            <h2 className="sm:mb-10 mb-4 text-sm">{articles.ref.discription}</h2>
            <div className="flex justify-center items-center sm:mb-12 mb-6 sm:text-base text-sm">
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
