import { AddArticleForm } from 'src/components/articles/addArticleFrom'

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <a className="text-2xl bg-gray-800 text-white py-1 px-4 rounded-md">QIN</a>
        <p className="font-bold text-4xl text-center text-gray-500">Panel discussion</p>
        <AddArticleForm />
      </div>
    </>
  )
}
