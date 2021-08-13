type Left = {
  left?: 'title' | JSX.Element
}

type Center = {
  center?: 'user' | 'admin' | JSX.Element
  roomId?: string
}

type Right = {
  right?: 'menu' | JSX.Element
  isChatOpen?: boolean
}

type Logout = {
  buttonType?: 'normal' | 'mobilelMenu' | JSX.Element
}

type HeaderProps = Left & Right & Center

export type { Center, HeaderProps, Left, Logout, Right }
