import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { ArticleList } from 'src/components/articles/articleList'
import { Container } from 'src/components/share/Container'
import { getRoomData, getRoomIds } from 'src/lib/getRoomData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const RoomPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Container id={articles.roomId}>
        <div className="text-white">
          {articles.roomId}
          {articles.ref.theme}
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
