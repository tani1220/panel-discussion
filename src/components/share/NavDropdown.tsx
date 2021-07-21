import Link from 'next/link'
import { VFC } from 'react'
import { AddArticleForm } from 'src/components/articles/addArticleFrom'
import { Button } from 'src/components/share/Button'
import { Logout } from 'src/components/share/Logout'

type Props = {
  isOpen: boolean
  id?: string
  right?: 'before' | 'after' | JSX.Element
}

export const NavDropdown: VFC<Props> = (props) => {
  return (
    <div>
      {props.isOpen ? (
        <div className="text-white bg-black flex justify-between p-4 px-6 border-t-2 sm:hidden">
          {props.right === 'after' ? <AddArticleForm id={props.id} /> : null}

          <Link href="/login">
            <Button className="mr-3">管理者</Button>
          </Link>

          <Logout />
        </div>
      ) : null}
    </div>
  )
}
