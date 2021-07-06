import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Article } from 'src/components/articles/articleList'
import { Container } from 'src/components/share/Container'
import type { articlePost } from 'src/types/types'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ newTasks }) => {
  return (
    <>
      <Container>
        <Article newTasks={newTasks} />
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const newTasks: articlePost = []
  const ref = await db.collection('tasks').orderBy('createdAt').get()
  ref.docs.map((doc) => {
    const data = { id: doc.id, question: doc.data().question }
    newTasks.push(data)
  })
  return {
    props: {
      newTasks,
    },
    revalidate: 60,
  }
}

export default Home
