type ChatType = {
  hundleChat: () => void
  isChatOpen: boolean
}

type ThreadType = {
  thread?: 'chat' | 'motif' | JSX.Element
}

type MenuType = {
  hundleChat: () => void
  hundleAdd?: () => void
  variety?: 'openChat' | 'openMotif' | 'close' | JSX.Element
}

type General = ThreadType &
  ChatType & {
    roomId?: string
  }

export type { ChatType, General, MenuType, ThreadType }
