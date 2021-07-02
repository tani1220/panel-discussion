import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Container } from 'src/components/Container'
import { TextCard } from 'src/components/TextCard'

type Props = InferGetStaticPropsType<typeof getStaticProps>

type Post = { id: string; question: string; name: string }[]

const Home: NextPage<Props> = ({ newTasks }) => {
  return (
    <>
      <Container>
        <ul>
          {newTasks.map((task) => (
            <li className="pt-4 text-3xl" key={task.id}>
              <div className="cursor-pointer">
                <TextCard id={task.id}>
                  <a>{task.question}</a>
                </TextCard>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const newTasks: Post = []
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
