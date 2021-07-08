import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
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

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const initialData = await getArticleData(params.articleId)

  return {
    props: {
      initialData,
    },
  }
}

export default ArticlePage
