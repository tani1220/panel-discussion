import Link from 'next/link'
import { AddArticleForm } from 'src/components/articles/addArticleFrom'
import { Button } from 'src/components/share/Button'
import { Logout } from 'src/components/share/Logout'

export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <a className="text-2xl bg-gray-800 text-white py-1 px-4 rounded-md">QIN</a>
      <p className="font-bold text-4xl text-center text-gray-500">Panel discussion</p>
      <div className="flex">
        <div className="mr-3">
          <AddArticleForm />
        </div>
        <Link href="/login">
          <Button className="mr-3">管理者</Button>
        </Link>
        <Logout />
      </div>
    </div>
  )
}
