type ChatType = {
  hundleChat: () => void
  isChatOpen: boolean
}

type ThreadType = {
  thread?: 'chat' | JSX.Element
}

type MenuType = {
  hundleChat: () => void
  hundleAdd?: () => void
  variety?: 'open' | 'close' | JSX.Element
}

type General = ThreadType &
  ChatType & {
    roomId?: string
  }

export type { ChatType, General, MenuType, ThreadType }
