type FormType = {
  hundleChat: () => void
}

type ChatType = FormType & {
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
  ChatType &
  FormType & {
    roomId?: string
  }

export type { ChatType, FormType, General, MenuType, ThreadType }
