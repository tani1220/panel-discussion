import Link from 'next/link'
import { VFC } from 'react'
import { ArticleForm } from 'src/components/articles/ArticleForm/ArticleFrom'
import { Button } from 'src/components/share/Button/Button'
import { Logout } from 'src/components/share/Header/Logout'

type NavItemProps = {
  isOpen: boolean
  roomId?: string
  right?: 'before' | 'after' | JSX.Element
}

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
