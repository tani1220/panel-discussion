import { InputHTMLAttributes, VFC } from 'react'
import type { AdminFormProps } from 'src/hooks/useDialog/useAdmin'

type InputAdminProps = {
  value: AdminFormProps
  hundleChange: (e: InputHTMLAttributes<HTMLInputElement>) => void
}

export const InputAdmin: VFC<InputAdminProps> = (props) => {
  return (
    <div className="h-5/6 flex overflow-y-auto">
      <div className="w-full m-8">
        <input
          type="text"
          name="theme"
          id="theme"
          value={props.value.theme}
          onChange={props.hundleChange}
          autoComplete="off"
          className="focus:outline-none focus:border-blue-900 w-full text-white h-8 px-2 sm:text-sm bg-black border-b border-gray-500"
          placeholder="タイトルを入力"
        />
        <input
          type="text"
          name="name"
          id="name"
          value={props.value.name}
          onChange={props.hundleChange}
          autoComplete="off"
          className="focus:outline-none focus:border-blue-900 sm:w-1/3 w-2/4 text-white h-8 px-2 sm:text-sm bg-black border-b border-gray-500 my-8"
          placeholder="名前を入力"
        />
        <div className="my-8 flex">
          <div>
            <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-400">
              日付
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={props.value.date}
              onChange={props.hundleChange}
              className="focus:outline-none h-8 px-2 mr-4 sm:text-sm bg-white bg-opacity-30 border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="time" className="mb-1 block text-sm font-medium text-gray-400">
              時間
            </label>
            <input
              type="time"
              name="time"
              id="time"
              value={props.value.time}
              onChange={props.hundleChange}
              className="focus:outline-none h-8 px-2 sm:text-sm bg-white bg-opacity-30 border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="my-8">
          <label htmlFor="Zoom URL" className="mb-1 block text-sm font-medium text-gray-500">
            URL
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded rounded-r-none border-r-2 border-black bg-white bg-opacity-10 text-gray-300 text-sm">
              https://
            </span>
            <input
              type="text"
              name="link"
              id="link"
              value={props.value.link}
              onChange={props.hundleChange}
              autoComplete="off"
              className="focus:outline-none focus:border-blue-900 w-full text-white h-8 px-2 sm:text-sm bg-black border-b border-gray-500"
              placeholder="www.example.com"
            />
          </div>
        </div>

        <div className="my-8">
          <label htmlFor="discription" className="mb-1 block text-sm font-medium text-gray-500 mt-5">
            詳細
          </label>
          <textarea
            name="discription"
            id="discription"
            value={props.value.discription}
            onChange={props.hundleChange}
            autoComplete="off"
            className="focus:outline-none focus:border-blue-900 w-full text-white h-40 p-2 sm:text-sm bg-black border border-gray-500 rounded"
          ></textarea>
        </div>
      </div>
    </div>
  )
}
