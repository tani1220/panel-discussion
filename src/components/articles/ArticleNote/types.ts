import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  name: string
}

type TextCardProps = {
  id: string
  name: string
  children: ReactNode
}

type articlePost = {
  roomId: string
  question: string
  name: string
}[]

type articleListProps = {
  article: {
    roomId: string
    ref: {
      theme: string
    }
  }
}

export type { articleListProps, articlePost, ModalProps, TextCardProps }
