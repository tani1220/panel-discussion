import { db } from 'lib/firebase'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Container } from 'src/components/Container'
import type { ModalInputType } from 'src/types/types'

type UserData = {
  name: string
  text: string
}

type Props = ModalInputType & {
  array: UserData[]
}

const Home: NextPage<Props> = (props) => {
  const { values, array, hundleChange, hundleAdd, closeModal, openModal, isOpen } = props

  const [tasks, setTasks] = useState([{ id: '', question: '' }])

  useEffect(() => {
    const unsubscribe = db.collection('tasks').onSnapshot((snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data().question })))
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <Container
        values={values}
        hundleChange={hundleChange}
        hundleAdd={hundleAdd}
        closeModal={closeModal}
        openModal={openModal}
        isOpen={isOpen}
      >
        <ul>
          {array.map((item) => {
            return (
              <li className="pt-4 text-3xl" key={item.text}>
                {item.name}
                {item.text}
              </li>
            )
          })}
        </ul>
        <div>
          {tasks.map((task) => {
            return <p key={task.id}>{task.question}</p>
          })}
        </div>
      </Container>
    </>
  )
}

export default Home
