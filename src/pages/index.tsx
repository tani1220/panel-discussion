import type { NextPage } from 'next'
import { Container } from 'src/components/Container'
import type { ModalInputType, UserData } from 'src/types/types'

type Props = ModalInputType & {
  tasks: UserData[]
}

const Home: NextPage<Props> = (props) => {
  const { values, hundleChange, hundleAdd, closeModal, openModal, isOpen, tasks } = props

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
          {tasks.map((item) => {
            return (
              <li className="pt-4 text-3xl" key={item.id}>
                {item.name}
                {item.question}
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}

export default Home
