import { ReactNode, VFC } from 'react'
import type { HeaderProps } from 'src/components/share/Header'
import { Header } from 'src/components/share/Header'
import { SlideNav } from 'src/components/SlideNav'

type Props = HeaderProps & {
  children?: ReactNode
  id?: string
}

export const Container: VFC<Props> = (props) => {
  const { children, ...headerProps } = props
  return (
    <div className="flex">
      <div className="h-screen overflow-scroll w-full bg-black bg-opacity-90">
        <Header {...headerProps} />
        <div className="mx-auto py-16 sm:py-20 ">{children}</div>
      </div>
      <SlideNav />
    </div>
  )
}
