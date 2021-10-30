import { XIcon } from '@heroicons/react/outline'
import { ChatAlt2Icon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { VFC } from 'react'
import { Button } from 'src/components/Button'

import { ItemProps } from './types'

export const ChatItem: VFC<ItemProps> = (props) => {
  if (!props.variety) {
    return null
  }

  if (props.variety === 'open') {
    return (
      <div className="fixed -bottom-0 right-0 sm:block hidden mb-2 mr-3 text-white">
        <Button
          className="flex mr-3 p-2 bg-black items-center border-2 border-gray-500 rounded"
          onClick={props.handleChat}
        >
          <ChatAlt2Icon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
          <p>チャット</p>
        </Button>
      </div>
    )
  }

  if (props.variety === 'close') {
    return (
      <div className="flex justify-between pt-3">
        <Button className="text-2xl" onClick={props.handleChat}>
          <XIcon className="text-white flex-shrink-0 h-6 w-6" aria-hidden="true" />
        </Button>

        <div className="flex">
          {/* 文字数カウント機能実装予定 */}
          <div className="text-xs my-auto pr-3">文字数</div>
          <Button onClick={props.handleAdd}>
            <ChevronRightIcon
              className="hover:bg-gray-700 rounded-full text-white flex-shrink-0 h-8 w-8"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    )
  }
  return props.variety
}
