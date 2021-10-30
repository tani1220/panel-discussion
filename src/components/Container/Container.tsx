import { ReactNode, VFC } from 'react'
import { useChat } from 'src/hooks/useChat'

import type { ThreadProps } from './Chat'
import { Chat } from './Chat'
import type { HeaderProps } from './Header'
import { Header } from './Header'

type Props = HeaderProps &
  ThreadProps & {
    children?: ReactNode
    roomId?: string
  }

export const Container: VFC<Props> = (props) => {
  const { children, roomId, thread, ...headerProps } = props

  const { isChatOpen, handleChat } = useChat()

  return (
    <div>
      <div className="flex h-screen">
        <div className="overflow-scroll w-full bg-black">
          <Header {...headerProps} isChatOpen={isChatOpen} roomId={roomId} />
          <div className="mx-auto pb-16">
            <div className={isChatOpen ? 'pt-2' : 'pt-20'}>{children}</div>
          </div>
        </div>

        {thread ? <Chat thread={thread} isChatOpen={isChatOpen} handleChat={handleChat} roomId={roomId} /> : null}
      </div>
    </div>
  )
}
