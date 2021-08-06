import { ReactNode } from 'react'

type ListDialogProps = {
  id: string
  name: string
  children: ReactNode
  roomId: string
}

type articlePost = {
  id: string
  question: string
  name: string
}[]

type ListProps = {
  article: {
    roomId: string
  }
}

export type { articlePost, ListDialogProps, ListProps }
