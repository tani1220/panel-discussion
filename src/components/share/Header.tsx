import { AddArticleForm } from 'src/components/articles/addArticleFrom'
import { Sign } from 'src/components/share/sign'

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <a className="text-2xl bg-gray-800 text-white py-1 px-4 rounded-md">QIN</a>
        <p className="font-bold text-4xl text-center text-gray-500">Panel discussion</p>
        <div className="flex">
          <div className="mr-3">
            <AddArticleForm />
          </div>
          <Sign>管理者</Sign>
        </div>
      </div>
    </>
  )
}
