import { ReactNode, VFC } from 'react'
import { Header } from 'src/components/Header'
import type { ModalInputType } from 'src/types/types'

type Props = ModalInputType & {
  children: ReactNode
}

export const Container: VFC<Props> = (props) => {
  return (
    <>
      <div className="pb-20">
        <div className="mx-auto sm:py-2 sm:px-14 border-b-2">
          <Header values={props.values} hundleChange={props.hundleChange} hundleAdd={props.hundleAdd} />
        </div>
        <div className="mx-auto w-full max-w-screen-md">{props.children}</div>
      </div>
    </>
  )
}
