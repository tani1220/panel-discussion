import { ChatAlt2Icon } from '@heroicons/react/solid'
import { SortAscendingIcon } from '@heroicons/react/solid'
import { VFC } from 'react'
import { Chat } from 'src/components/Chat'

type SlideNavProps = {
  isChatOpen: boolean
  hundleChat: () => void
}

export const SlideNav: VFC<SlideNavProps> = (props) => {
  const { isChatOpen, hundleChat } = props

  return (
    <>
      {isChatOpen ? (
        <div className="sm:max-w-xs sm:w-full bg-black text-white">
          <div className="h-full flex items-end justify-center">
            <div className="w-11/12">
              <Chat hundleChat={hundleChat} />
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed -bottom-0 right-0 flex mb-2 mr-3 text-white">
          <button className="flex mr-3 p-2 bg-black items-center border-2 border-gray-500 rounded" onClick={hundleChat}>
            <ChatAlt2Icon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
            <p>チャット</p>
          </button>

          <button className="flex p-2 bg-black items-center border-2 border-gray-500 rounded">
            <SortAscendingIcon className="flex-shrink-0 h-7 w-7 mr-2 text-gray-300" aria-hidden="true" />
            <p>ボタン</p>
          </button>
        </div>
      )}
    </>
  )
}
