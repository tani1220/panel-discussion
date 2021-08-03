type HeaderProps = {
  left?: 'title' | JSX.Element
  right?: 'before' | 'after' | JSX.Element
  roomId?: string
  isChatOpen?: boolean
}

type NavItemProps = {
  isOpen?: boolean
  roomId?: string
  right?: 'before' | 'after' | JSX.Element
}

export type { HeaderProps, NavItemProps }
