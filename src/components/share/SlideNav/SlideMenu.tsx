import { XIcon } from '@heroicons/react/outline'
import { ChatAlt2Icon } from '@heroicons/react/solid'
import { SortAscendingIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { VFC } from 'react'
import { Button } from 'src/components/share/Button'

import { MenuType } from './types'

export const SlideMenu: VFC<MenuType> = (props) => {
  return <SlideButton hundleChat={props.hundleChat} hundleAdd={props.hundleAdd} variety={props.variety} />
}

const SlideButton: VFC<MenuType> = (props) => {
  if (!props.variety) {
    return null
  }

  if (props.variety === 'open') {
    return (
      <div className="fixed -bottom-0 right-0 sm:flex hidden mb-2 mr-3 text-white">
        <Button
          className="flex mr-3 p-2 bg-black items-center border-2 border-gray-500 rounded"
          onClick={props.hundleChat}
        >
          <ChatAlt2Icon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
          <p>チャット</p>
        </Button>

        <Button className="flex p-2 bg-black items-center border-2 border-gray-500 rounded">
          <SortAscendingIcon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
          <p>ボタン</p>
        </Button>
      </div>
    )
  }

  if (props.variety === 'close') {
    return (
      <div className="flex justify-between pt-3">
        <Button className="text-2xl" onClick={props.hundleChat}>
          <XIcon className="text-white flex-shrink-0 h-6 w-6" aria-hidden="true" />
        </Button>

        <div className="flex">
          {/* 文字数カウント機能実装予定 */}
          <div className="text-xs my-auto pr-3">文字数</div>
          <Button onClick={props.hundleAdd}>
            <ChevronRightIcon
              className="hover:bg-gray-700 rounded-full text-white flex-shrink-0 h-8 w-8"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    )
  }
  return null
}
