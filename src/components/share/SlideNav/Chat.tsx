import { db } from 'firebase/clientApp'
import { useCallback, useEffect, VFC } from 'react'
import { useSlideNav } from 'src/hooks/useSlideNav'

import { SlideMenu } from './SlideMenu'
import { General } from './types'

export const Chat: VFC<General> = (props) => {
  const { chatText, setChatText, hundleText, chatTable, setChatTable, scrollChatList, scrollRef } = useSlideNav()

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

  useEffect(() => {
    scrollChatList()
  }, [props.hundleChat])

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
      scrollChatList()
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
                    <div ref={scrollRef} />
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

                <SlideMenu
                  hundleChat={props.hundleChat}
                  hundleAdd={() => {
                    hundleAdd(chatText)
                  }}
                  variety="close"
                />
              </div>
            </div>
          </div>
        ) : (
          <SlideMenu hundleChat={props.hundleChat} variety="open" />
        )}
      </>
    )
  }
  return null
}
