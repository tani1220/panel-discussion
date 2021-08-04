import Link from 'next/link'
import { VFC } from 'react'
import { ArticleForm } from 'src/components/articles/ArticleForm'
import { Button } from 'src/components/share/Button'

import { Logout } from './Logout'
import { MobileMenu } from './MobileMenu'
import { HeaderProps } from './types'

export const Header: VFC<HeaderProps> = (props) => {
  return (
    <header>
      <div className={props.isChatOpen ? 'w-full' : 'w-full fixed'}>
        <div className="flex justify-between items-center mx-auto sm:py-3 sm:px-14 p-4 bg-black">
          <Left left={props.left} />
          <Right right={props.right} roomId={props.roomId} />
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
      <div className="flex items-center md:text-5xl sm:text-3xl text-2xl font-bold text-white">
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
              <Button type="normal" className="mr-3">
                管理者
              </Button>
            </Link>
            <Logout buttonType="normal" />
          </div>
        </div>

        {/* 携帯画面 */}
        <div className="lg:hidden text-gray-300 bg-black flex items-center">
          <div className="mr-3">{props.right === 'after' ? <ArticleForm roomId={props.roomId} /> : null}</div>
          <MobileMenu />
        </div>
      </div>
    )
  }
  return props.right
}
