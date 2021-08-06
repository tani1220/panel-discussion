import { ReactNode, VFC } from 'react'
import type { ThreadProps } from 'src/components/share/Chat'
import { Chat } from 'src/components/share/Chat'
import type { HeaderProps } from 'src/components/share/Header'
import { Header } from 'src/components/share/Header'
import { useSlideNav } from 'src/hooks/useSlideNav'

type Props = HeaderProps &
  ThreadProps & {
    children?: ReactNode
    roomId?: string
  }

export const Container: VFC<Props> = (props) => {
  const { children, roomId, thread, ...headerProps } = props

  const { isChatOpen, hundleChat } = useSlideNav()

  return (
    <div>
      <div className="flex h-screen">
        <div className="overflow-scroll w-full bg-black">
          <Header {...headerProps} isChatOpen={isChatOpen} roomId={roomId} />
          <div className="mx-auto pb-16">
            <div className={isChatOpen ? 'pt-2' : 'pt-20'}>{children}</div>
          </div>
        </div>

        <Chat thread={thread} isChatOpen={isChatOpen} hundleChat={hundleChat} roomId={roomId} />
      </div>
    </div>
  )
}
