import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Container } from 'panel-discussion/src/components/share/Container'
import { getRoomData, getRoomIds } from 'src/lib/getRoomData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const RoomPage: NextPage<Props> = ({ initialData }) => {
  return (
    <>
      <Container>
        {initialData.roomId}
        {initialData.ref.theme}
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
  const initialData = await getRoomData(params.roomId)

  return {
    props: {
      initialData,
    },
  }
}

export default RoomPage
