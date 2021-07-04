import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Article } from 'src/components/articles'
import { Container } from 'src/components/Container'
import type { TaskPost } from 'src/types/types'

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
  const newTasks: TaskPost = []
  const ref = await db.collection('tasks').orderBy('createdAt').get()
  ref.docs.map((doc) => {
    const data = { id: doc.id, name: doc.data().name, question: doc.data().question }
    newTasks.push(data)
  })
  return {
    props: {
      newTasks,
    },
    revalidate: 10,
  }
}

export default Home
