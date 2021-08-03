import { ReactNode } from 'react'

type ArticleCard = {
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

type articleNoteProps = {
  article: {
    roomId: string
  }
}

export type { ArticleCard, articleNoteProps, articlePost }
