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

export type { articlePost, ListProps }
