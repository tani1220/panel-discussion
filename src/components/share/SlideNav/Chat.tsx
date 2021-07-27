import { XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { db } from 'firebase/clientApp'
import { useCallback, useEffect, VFC } from 'react'
import { SlideButton } from 'src/components/share/SlideNav/SlideButton'
import { useChat } from 'src/hooks/useChat'

import { General } from './types'

export const Chat: VFC<General> = (props) => {
  const { chatText, setChatText, hundleText, chatTable, setChatTable } = useChat()

  useEffect(() => {
    const unsub = db
      .collection('contents')
      .doc(props.roomId)
      .collection('thread')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setChatTable(snapshot.docs.map((doc) => ({ message: doc.data().message, id: doc.id })))
      })
    return () => unsub()
  }, [])

  const hundleAdd = useCallback(
    async (chatText) => {
      await db
        .collection('contents')
        .doc(props.roomId)
        .collection('thread')
        .add({
          message: chatText,
          createdAt: JSON.stringify(new Date()),
        })
      setChatText('')
    },
    [chatText]
  )

  if (props.thread === 'chat') {
    return (
      <>
        {props.isChatOpen ? (
          <div className="sm:max-w-xs sm:w-full bg-black text-white ">
            <div className="h-full flex items-end justify-center">
              <div className="w-11/12 mb-4">
                <div className="max-h-screen overflow-y-scroll">
                  <ul className="text-white text-sm text-opacity-80">
                    {chatTable.map((item) => {
                      return (
                        <li key={item.id} className="py-2">
                          {item.message}
                        </li>
                      )
                    })}
                  </ul>
                </div>

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

                <div className="flex justify-between pt-3">
                  <button className="text-2xl" onClick={props.hundleChat}>
                    <XIcon className="text-white flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="flex">
                    {/* 文字数カウント機能実装予定 */}
                    <div className="text-xs my-auto pr-3">文字数</div>
                    <button
                      onClick={() => {
                        hundleAdd(chatText)
                      }}
                    >
                      <ChevronRightIcon
                        className="hover:bg-gray-700 rounded-full text-white flex-shrink-0 h-8 w-8"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SlideButton hundleChat={props.hundleChat} />
        )}
      </>
    )
  }
  return null
}
