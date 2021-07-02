import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Button } from 'src/components/Button'
import { getTaskData, getTaskIds } from 'src/lib/getTaskData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const TaskPage: NextPage<Props> = ({ initialData }) => {
  console.log(initialData)
  return (
    <>
      <div className="h-screen flex border-8 border-indigo-600">
        <div className="m-auto p-20">
          <h1 className="text-5xl">{initialData.question}</h1>
          <h2 className="text-3xl mt-5">{initialData.name}</h2>
          <Link href="/">
            <Button className="float-right">戻る</Button>
          </Link>
        </div>
      </div>
    </>
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