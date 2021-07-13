import { db } from 'firebase/clientApp'
import { useCallback, useState } from 'react'

export const Motif = () => {
  const [text, setText] = useState('')

  const hundleChange = useCallback(
    (e: any) => {
      setText(e.target.value)
    },
    [text]
  )

  const hundleAdd = async (text: string) => {
    await db.collection('contents').doc().set({
      //お題
      theme: text,
      //参加者
      participant: '',
      //日時
      time: '',
      //zoomlinkなど
      link: '',
      //詳細
      description: '',
    })
  }

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          お題
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={text}
          onChange={hundleChange}
        />
      </div>
      <button
        onClick={() => {
          hundleAdd(text)
        }}
      >
        ボタン
      </button>
    </div>
  )
}
