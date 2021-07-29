import { VFC } from 'react'

import { SlideMenu } from './SlideMenu'

type Form = {
  hundleChat: () => void
}

export const Form: VFC<Form> = (props) => {
  return (
    <div>
      <div className="mt-10">
        <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-500">
          お題
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="focus:outline-none w-full h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-500">
          名前
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
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
          className="text-white h-40 w-full p-2 focus:outline-none sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="">
        <SlideMenu hundleChat={props.hundleChat} variety="close" />
      </div>
    </div>
  )
}
