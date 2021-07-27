import { VFC } from 'react'
import { Chat } from 'src/components/share/SlideNav/Chat'
import { Motif } from 'src/components/share/SlideNav/Motif'

import { General } from './types'

export const SlideNav: VFC<General> = (props) => {
  return <Thread {...props} />
}

const Thread: VFC<General> = (props) => {
  const { isChatOpen, hundleChat, thread, roomId } = props

  if (!props.thread) {
    return null
  }

  return (
    <>
      <Chat hundleChat={hundleChat} roomId={roomId} isChatOpen={isChatOpen} thread={thread} />
      <Motif hundleChat={hundleChat} isChatOpen={isChatOpen} thread={thread} />
    </>
  )
}
