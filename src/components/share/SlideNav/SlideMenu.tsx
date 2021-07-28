import { XIcon } from '@heroicons/react/outline'
import { ChatAlt2Icon } from '@heroicons/react/solid'
import { SortAscendingIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { VFC } from 'react'

import { MenuType } from './types'

export const SlideMenu: VFC<MenuType> = (props) => {
  return <SlideButton hundleChat={props.hundleChat} hundleAdd={props.hundleAdd} variety={props.variety} />
}

const SlideButton: VFC<MenuType> = (props) => {
  if (!props.variety) {
    return null
  }

  if (props.variety === 'openChat' || props.variety === 'openMotif') {
    return (
      <div className="fixed -bottom-0 right-0 sm:flex hidden mb-2 mr-3 text-white">
        <button
          className="flex mr-3 p-2 bg-black items-center border-2 border-gray-500 rounded"
          onClick={props.hundleChat}
        >
          <ChatAlt2Icon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
          <p>{props.variety === 'openChat' ? 'チャット' : 'お題投稿'}</p>
        </button>

        <button className="flex p-2 bg-black items-center border-2 border-gray-500 rounded">
          <SortAscendingIcon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
          <p>ボタン</p>
        </button>
      </div>
    )
  }

  if (props.variety === 'close') {
    return (
      <div className="flex justify-between pt-3">
        <button className="text-2xl" onClick={props.hundleChat}>
          <XIcon className="text-white flex-shrink-0 h-6 w-6" aria-hidden="true" />
        </button>

        <div className="flex">
          {/* 文字数カウント機能実装予定 */}
          <div className="text-xs my-auto pr-3">文字数</div>
          <button onClick={props.hundleAdd}>
            <ChevronRightIcon
              className="hover:bg-gray-700 rounded-full text-white flex-shrink-0 h-8 w-8"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    )
  }
  return null
}
