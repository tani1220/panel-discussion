type ItemProps = {
  handleChat: () => void
  handleAdd?: () => void
  variety?: 'open' | 'close' | JSX.Element
}

type ThreadProps = {
  thread?: 'chat' | JSX.Element
}

type ChatProps = ThreadProps & {
  roomId?: string
  handleChat: () => void
  isChatOpen: boolean
}

export type { ChatProps, ItemProps, ThreadProps }
