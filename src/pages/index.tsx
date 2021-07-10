import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Article } from 'src/components/articles/articleList'
import { Container } from 'src/components/share/Container'
import type { articlePost } from 'src/types/types'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Container>
      <Article articles={articles} />
    </Container>
  )
}

export const getStaticProps = async () => {
  const articles: articlePost = []

  const ref = await db.collection('articles').orderBy('createdAt').get()
  ref.docs.map((doc) => {
    const data = { id: doc.id, question: doc.data().question }
    articles.push(data)
  })

  return {
    props: {
      articles,
    },
    revalidate: 60,
  }
}

export default Home
