import { Button } from 'src/components/Button'

export const Main = () => {
  return (
    <>
      <div className="">
        <input
          type="text"
          className="border-b w-full focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50"
          placeholder="お題を入力してください"
        />
        <Button className="mt-5">投稿する</Button>
      </div>
    </>
  )
}
