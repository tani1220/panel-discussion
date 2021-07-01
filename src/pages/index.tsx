import { db } from 'firebase/clientApp'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { Container } from 'src/components/Container'

type Props = InferGetStaticPropsType<typeof getStaticProps>

type Post = { id: string; question: string; name: string }[]

const Home: NextPage<Props> = ({ newTasks }) => {
  return (
    <>
      <Container>
        <ul>
          {newTasks.map((task) => (
            <li className="pt-4 text-3xl" key={task.id}>
              <Link href={`/tasks/${task.id}`}>
                <a>
                  {task.name}
                  {task.question}
                </a>
              </Link>
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
