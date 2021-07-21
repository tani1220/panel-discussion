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
    <div>
      <Header {...headerProps} />
      <div className="flex h-screen pt-16">
        <div className="overflow-scroll w-full bg-black bg-opacity-90">
          <div className="mx-auto pb-16 pt-2">{children}</div>
        </div>
        <SlideNav />
      </div>
    </div>
  )
}
