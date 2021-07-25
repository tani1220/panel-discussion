import { ReactNode, VFC } from 'react'
import type { HeaderProps } from 'src/components/share/Header'
import { Header } from 'src/components/share/Header'
import type { ThreadProps } from 'src/components/SlideNav'
import { SlideNav } from 'src/components/SlideNav'
import { useChat } from 'src/hooks/useChat'

type Props = HeaderProps &
  ThreadProps & {
    children?: ReactNode
    roomId?: string
  }

export const Container: VFC<Props> = (props) => {
  const { children, roomId, thread, ...headerProps } = props

  const { isChatOpen, hundleChat } = useChat()

  return (
    <div>
      <div className="flex h-screen">
        <div className="overflow-scroll w-full bg-black bg-opacity-90">
          <Header {...headerProps} isChatOpen={isChatOpen} />
          <div className="mx-auto pb-16">
            <div className={isChatOpen ? 'pt-2' : 'pt-20'}>{children}</div>
          </div>
        </div>

        <SlideNav thread={thread} isChatOpen={isChatOpen} hundleChat={hundleChat} roomId={roomId} />
      </div>
    </div>
  )
}
