import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getTaskData, getTaskIds } from 'src/lib/getTaskData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const TaskPage: NextPage<Props> = ({ initialData }) => {
  console.log(initialData)
  return (
    <div>
      {initialData.question}
      {initialData.name}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getTaskIds()
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const initialData = await getTaskData(params.id)

  return {
    props: {
      initialData,
    },
  }
}

export default TaskPage
