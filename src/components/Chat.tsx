import { ChevronRightIcon } from '@heroicons/react/solid'
import { useCallback, useState } from 'react'

export const Chat = () => {
  const [chatText, setChatText] = useState('')
  const [chatList, setChatList] = useState<string[]>([])

  const hundleText = useCallback(
    (e: any) => {
      setChatText(e.target.value)
    },
    [chatText]
  )

  const hundleAdd = useCallback(() => {
    setChatList((prevChatList) => {
      return [...prevChatList, chatText]
    })
  }, [chatText])

  return (
    <div className="mb-4 bg-gray-600">
      <ul className="text-white">
        {chatList.map((item) => {
          return (
            <li key={item} className="py-1 text-sm">
              {item}
            </li>
          )
        })}
      </ul>
      <div className="mt-2 text-white">
        <input
          type="text"
          name="text"
          value={chatText}
          onChange={hundleText}
          autoComplete="off"
          className="focus:outline-none w-full h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
          placeholder="テキストを入力"
        />
      </div>
      <div className="flex justify-end pt-3">
        <div className="text-xs my-auto pr-3">文字数</div>
        <button onClick={hundleAdd}>
          <ChevronRightIcon
            className="hover:bg-gray-700 rounded-full text-white flex-shrink-0 h-8 w-8"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  )
}
