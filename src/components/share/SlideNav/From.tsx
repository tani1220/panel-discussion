import { VFC } from 'react'
import { useSlideNav } from 'src/hooks/useSlideNav'

import { SlideMenu } from './SlideMenu'
import { FormType } from './types'

export const Form: VFC<FormType> = (props) => {
  const { data, hundleChange, hundleAdd } = useSlideNav()

  return (
    <div>
      <div className="text-center text-xl font-mono p-10">お題を投稿してみよう！</div>
      <div className="mt-10">
        <label htmlFor="theme" className="mb-2 block text-sm font-medium text-gray-500">
          お題
        </label>
        <input
          type="text"
          name="theme"
          id="theme"
          value={data.theme}
          onChange={hundleChange}
          autoComplete="off"
          className="focus:outline-none w-full h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-500">
          名前
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={hundleChange}
          autoComplete="off"
          className="focus:outline-none w-1/3 h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
        />
      </div>

      <div className="mt-8 flex">
        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-500">
            日付
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={data.date}
            onChange={hundleChange}
            autoComplete="off"
            className="focus:outline-none h-8 px-2 mr-4 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="time" className="mb-2 block text-sm font-medium text-gray-500">
            時間
          </label>
          <input
            type="time"
            name="time"
            id="time"
            value={data.time}
            onChange={hundleChange}
            autoComplete="off"
            className="focus:outline-none h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="Zoom URL" className="mb-2 block text-sm font-medium text-gray-500">
          URL
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded rounded-r-none border-r-2 border-black bg-white bg-opacity-30 text-gray-300 text-sm">
            http://
          </span>
          <input
            type="text"
            name="link"
            id="link"
            value={data.link}
            onChange={hundleChange}
            autoComplete="off"
            className="focus:outline-none w-full h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded rounded-l-none"
            placeholder="www.example.com"
          />
        </div>
      </div>

      <div className="mt-10">
        <label htmlFor="discription" className="mb-2 block text-sm font-medium text-gray-500 mt-5">
          詳細
        </label>
        <textarea
          name="discription"
          id="discription"
          value={data.discription}
          onChange={hundleChange}
          autoComplete="off"
          className="text-white h-40 w-full p-2 focus:outline-none sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
        ></textarea>
      </div>

      <SlideMenu
        hundleChat={props.hundleChat}
        hundleAdd={() => {
          hundleAdd(data)
        }}
        variety="close"
      />
    </div>
  )
}
