import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { Button } from 'src/components/share/Button'
import { useNote } from 'src/hooks/useNote'
import { getTaskData, getTaskIds } from 'src/lib/getTaskData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const TaskPage: NextPage<Props> = ({ initialData }) => {
  const { articleDelete } = useNote()
  const router = useRouter()

  const taskDelete = async () => {
    const id = initialData.taskId
    await articleDelete(id)
    router.push('/')
  }

  return (
    <>
      <div className="h-screen flex border-8 border-indigo-600">
        <div className="m-auto p-20">
          <h1 className="text-5xl">{initialData.ref.question}</h1>
          <h2 className="text-3xl mt-5">{initialData.ref.name}</h2>
          <div className="float-right">
            <Link href="/">
              <Button className="mr-3">戻る</Button>
            </Link>
            <Button onClick={taskDelete}>削除</Button>
          </div>
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
