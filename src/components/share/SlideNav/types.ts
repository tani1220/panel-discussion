type ChatType = {
  hundleChat: () => void
  isChatOpen: boolean
}

type ThreadType = {
  thread?: 'chat' | 'motif' | JSX.Element
}

type General = ThreadType &
  ChatType & {
    roomId?: string
  }

export type { ChatType, General, ThreadType }
