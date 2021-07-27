import { ChatAlt2Icon } from '@heroicons/react/solid'
import { SortAscendingIcon } from '@heroicons/react/solid'
import { VFC } from 'react'

type SlideButtonProps = {
  hundleChat: () => void
}

export const SlideButton: VFC<SlideButtonProps> = (props) => {
  return (
    <div className="fixed -bottom-0 right-0 sm:flex hidden mb-2 mr-3 text-white">
      <button
        className="flex mr-3 p-2 bg-black items-center border-2 border-gray-500 rounded"
        onClick={props.hundleChat}
      >
        <ChatAlt2Icon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
        <p>チャット</p>
      </button>

      <button className="flex p-2 bg-black items-center border-2 border-gray-500 rounded">
        <SortAscendingIcon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
        <p>ボタン</p>
      </button>
    </div>
  )
}
