import Link from 'next/link'
import { VFC } from 'react'
import { ArticleForm } from 'src/components/articles/ArticleForm'
import { Admin } from 'src/components/articles/ArticleForm/Admin'
import { Button } from 'src/components/share/Button'

import { Logout } from './Logout'
import { MobileMenu } from './MobileMenu'
import { HeaderProps } from './types'

export const Header: VFC<HeaderProps> = (props) => {
  return (
    <header>
      <div className={props.isChatOpen ? 'w-full' : 'w-full fixed'}>
        <div className="flex justify-between items-center mx-auto border-gray-800 border-b sm:py-3 sm:px-14 p-4 bg-black">
          <Left left={props.left} />
          <div className="flex items-center">
            <Center center={props.center} roomId={props.roomId} />
            <Right right={props.right} isChatOpen={props.isChatOpen} />
          </div>
        </div>
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
      <div className="flex items-center md:text-5xl sm:text-3xl text-2xl font-bold text-blue-50">
        <Link href="/">
          <a>Panel discussion</a>
        </Link>
      </div>
    )
  }
  return props.left
}

const Right: VFC<HeaderProps> = (props) => {
  if (!props.right) {
    return null
  }
  if (props.right === 'menu') {
    return (
      <div>
        <div className={props.isChatOpen ? 'hidden' : 'hidden lg:block'}>
          <div className="flex">
            <Link href="/login">
              <Button type="normal" className="mr-3">
                管理者
              </Button>
            </Link>
            <Logout buttonType="normal" />
          </div>
        </div>

        {/* 携帯画面 */}
        <div className={props.isChatOpen ? 'text-gray-300 bg-black flex items-center' : 'lg:hidden'}>
          <MobileMenu />
        </div>
      </div>
    )
  }
  return props.right
}

const Center: VFC<HeaderProps> = (props) => {
  if (!props.center) {
    return null
  }

  if (props.center === 'admin') {
    return (
      <div className="mr-3">
        <Admin />
      </div>
    )
  }

  if (props.center === 'user') {
    return (
      <div className="mr-3">
        <ArticleForm roomId={props.roomId} />
      </div>
    )
  }

  return props.center
}
