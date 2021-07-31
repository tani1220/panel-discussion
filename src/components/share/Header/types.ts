import { Dispatch, SetStateAction } from 'react'

type HeaderProps = {
  left?: 'title' | JSX.Element
  right?: 'before' | 'after' | JSX.Element
  roomId?: string
  isChatOpen?: boolean
}

type HundleNavProps = {
  navIsOpen?: boolean
  navIsNotOpen: Dispatch<SetStateAction<boolean>>
}

type NavItemProps = {
  isOpen: boolean
  roomId?: string
  right?: 'before' | 'after' | JSX.Element
}

export type { HeaderProps, HundleNavProps, NavItemProps }
