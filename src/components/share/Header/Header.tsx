import Link from 'next/link'
import { Dispatch, SetStateAction, useCallback, VFC } from 'react'
import { ArticleForm } from 'src/components/articles/ArticleForm/ArticleFrom'
import { Button } from 'src/components/share/Button/Button'
import { Logout } from 'src/components/share/Header/Logout'
import { MobileMenu } from 'src/components/share/Header/MobileMenu'
import { useNote } from 'src/hooks/useNote'

export type HeaderProps = {
  left?: 'title' | JSX.Element
  right?: 'before' | 'after' | JSX.Element
  roomId?: string
  isChatOpen?: boolean
}

type HundleNavProps = {
  navIsOpen?: boolean
  navIsNotOpen: Dispatch<SetStateAction<boolean>>
}

export const Header: VFC<HeaderProps> = (props) => {
  const { navIsOpen, navIsNotOpen } = useNote()

  return (
    <header>
      <div className={props.isChatOpen ? 'w-full' : 'w-full fixed'}>
        <div className="flex justify-between items-center mx-auto sm:py-3 sm:px-14 p-4 bg-black">
          <Left left={props.left} />
          <Right right={props.right} roomId={props.roomId} navIsOpen={navIsOpen} navIsNotOpen={navIsNotOpen} />
        </div>
        <MobileMenu isOpen={navIsOpen} roomId={props.roomId} right={props.right} />
      </div>
    </header>
  )
}

const Left: VFC<HeaderProps> = (props) => {
  if (!props.left) {
    return null
  }
  if (props.left === 'title') {
    return (
      <div className="flex items-center">
        <Link href="/">
          <a className="sm:text-5xl text-3xl font-bold text-white">Panel discussion</a>
        </Link>
      </div>
    )
  }
  return props.left
}

const Right: VFC<HeaderProps & HundleNavProps> = (props) => {
  const { navIsOpen, navIsNotOpen } = props

  const hundleNav = useCallback(() => {
    navIsNotOpen(!navIsOpen)
  }, [navIsOpen])

  if (!props.right) {
    return null
  }
  if (props.right === 'before' || props.right === 'after') {
    return (
      <div>
        <div className="hidden lg:block">
          <div className="flex">
            {props.right === 'after' ? (
              <div className="mr-3">
                <ArticleForm roomId={props.roomId} />
              </div>
            ) : null}

            <Link href="/login">
              <Button className="mr-3">管理者</Button>
            </Link>
            <Logout />
          </div>
        </div>

        {/* 携帯画面 */}
        <button onClick={hundleNav} className="lg:hidden text-gray-300 bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    )
  }
  return props.right
}