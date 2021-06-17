import type { NextPage } from 'next'
import { Container } from 'src/components/Container'
import type { ModalInputType } from 'src/types/types'

type Props = ModalInputType & {
  array: (string | number)[]
}

const Home: NextPage<Props> = (props) => {
  const { text, array, hundleChange, hundleAdd } = props
  return (
    <>
      <Container text={text} hundleChange={hundleChange} hundleAdd={hundleAdd}>
        <ul>
          {array.map((item) => {
            return (
              <li className="pt-4 text-3xl" key={item}>
                {item}
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}

export default Home
