import { ReactNode, VFC } from 'react'
import { Header } from 'src/components/share/Header'

type Props = {
  children?: ReactNode
  id?: string
}

export const Container: VFC<Props> = (props) => {
  return (
    <div className="h-screen overflow-scroll w-full bg-black bg-opacity-90">
      <Header id={props.id} />
      <div className="mx-auto py-16 sm:py-20 ">{props.children}</div>
    </div>
  )
}
