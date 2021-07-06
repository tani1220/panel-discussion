import { ReactNode, VFC } from 'react'
import { Header } from 'src/components/share/Header'

type Props = {
  children?: ReactNode
}

export const Container: VFC<Props> = (props) => {
  return (
    <>
      <div className="mx-auto sm:py-2 sm:px-14 border-b-2">
        <Header />
      </div>
      <div className="mx-auto w-full max-w-screen-md">{props.children}</div>
    </>
  )
}
