import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { Button } from 'src/components/share/Button'
import { useNote } from 'src/hooks/useNote'
import { getArticleData, getArticleIds } from 'src/lib/getArticleData'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const ArticlePage: NextPage<Props> = ({ initialData }) => {
  const { articleDelete } = useNote()
  const router = useRouter()

  const hundleDelete = async () => {
    const id = initialData.ArticleId
    await articleDelete(id)
    router.back()
  }

  return (
    <>
      <div className="h-screen flex border-8 border-gray-400 bg-gray-800 overflow-scroll">
        <div className="m-auto sm:p-20 p-8 text-white font-mono">
          <h1 className="sm:text-5xl text-2xl">{initialData.ArticleId}</h1>
          <div className="float-right">
            <Button onClick={() => router.back()} className="mr-3">
              戻る
            </Button>
            <Button onClick={hundleDelete}>削除</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getArticleIds()
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: any) => {
  const initialData = await getArticleData(params.articleId)

  return {
    props: {
      initialData,
    },
  }
}

export default ArticlePage
