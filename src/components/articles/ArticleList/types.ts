import { ReactNode } from 'react'

type ModalProps = {
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

type articleListProps = {
  article: {
    roomId: string
  }
}

export type { articleListProps, articlePost, ModalProps }
