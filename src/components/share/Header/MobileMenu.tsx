import Link from 'next/link'
import { VFC } from 'react'
import { ArticleForm } from 'src/components/articles/ArticleForm'
import { Button } from 'src/components/share/Button'

import { Logout } from './Logout'
import { NavItemProps } from './types'

export const MobileMenu: VFC<NavItemProps> = (props) => {
  return (
    <div>
      {props.isOpen ? (
        <div className="text-white bg-black flex justify-between p-4 px-6 border-t-2 lg:hidden">
          {props.right === 'after' ? <ArticleForm roomId={props.roomId} /> : null}

          <Link href="/login">
            <Button className="mr-3">管理者</Button>
          </Link>

          <Logout />
        </div>
      ) : null}
    </div>
  )
}
