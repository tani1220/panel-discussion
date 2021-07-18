import Link from 'next/link'
import { useState, VFC } from 'react'
import { AddArticleForm } from 'src/components/articles/addArticleFrom'
import { Button } from 'src/components/share/Button'
import { Logout } from 'src/components/share/Logout'
import { NavDropdown } from 'src/components/share/NavDropdown'

type Props = {
  id?: string
}

export const Header: VFC<Props> = (props) => {
  const [isOpen, isNotOpen] = useState(false)

  const hundleNav = () => {
    isNotOpen(!isOpen)
  }

  return (
    <div className="w-full fixed">
      <div className="flex justify-between items-center mx-auto sm:py-3 sm:px-14 p-4 bg-black">
        <div className="flex items-center">
          <Link href="/">
            <a className="sm:text-5xl text-3xl font-bold text-white">Panel discussion</a>
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className="flex">
            <div className="mr-3">
              <AddArticleForm id={props.id} />
            </div>
            <Link href="/login">
              <Button className="mr-3">管理者</Button>
            </Link>
            <Logout />
          </div>
        </div>

        {/* 携帯画面 */}
        <button onClick={hundleNav} className="sm:hidden text-gray-300 bg-black">
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
      <NavDropdown isOpen={isOpen} id={props.id} />
    </div>
  )
}
