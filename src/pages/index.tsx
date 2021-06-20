import type { NextPage } from 'next'
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
      </Container>
    </>
  )
}

export default Home
