type ThemeCardProps = {
  id: string
  theme: string
  name: string
  date: string
  time: string
}

type ListProps = {
  article: {
    roomId: string
  }
}

export type { ListProps, ThemeCardProps }
