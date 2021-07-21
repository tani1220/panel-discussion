import { useCallback, useState } from 'react'

export const Chat = () => {
  const [chatText, setChatText] = useState()

  const hundleText = useCallback(
    (e: any) => {
      const value = e.target.value
      setChatText(value)
    },
    [chatText]
  )

  return (
    <div className="mb-4">
      <div className="mt-2 text-white">
        <input
          type="text"
          name="text"
          value={chatText}
          onChange={hundleText}
          className="focus:ring-indigo-500 focus:border-indigo-500 w-full h-8 px-2 sm:text-sm bg-gray-900 border-gray-300"
          placeholder="テキストを入力"
        />
      </div>
    </div>
  )
}
