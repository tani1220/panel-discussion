import { ReactNode, VFC } from 'react'
import { Header } from 'src/components/share/Header'

type Props = {
  children?: ReactNode
}

export const Container: VFC<Props> = (props) => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="mx-auto py-16 sm:py-20 bg-black bg-opacity-90">{props.children}</div>
    </div>
  )
}
