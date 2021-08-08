type ItemProps = {
  hundleChat: () => void
  hundleAdd?: () => void
  variety?: 'open' | 'close' | JSX.Element
}

type ThreadProps = {
  thread?: 'chat' | JSX.Element
}

type ChatProps = ThreadProps & {
  roomId?: string
  hundleChat: () => void
  isChatOpen: boolean
}

export type { ChatProps, ItemProps, ThreadProps }
