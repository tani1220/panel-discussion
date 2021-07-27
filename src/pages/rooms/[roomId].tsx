import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { ArticleNote } from 'src/components/articles/ArticleNote/ArticleNote'
import { Container } from 'src/components/share/Container'
import { getRoomData, getRoomIds } from 'src/lib/getRoomData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const RoomPage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Container roomId={articles.roomId} left="title" right="after" thread="chat">
        <ArticleNote article={articles} />
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
