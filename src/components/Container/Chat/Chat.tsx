import { useEffect, VFC } from 'react'
import { useChat } from 'src/hooks/useChat'

import { ChatItem } from './ChatItem'
import { ChatProps } from './types'

export const Chat: VFC<ChatProps> = (props) => {
  const { chatText, hundleText, chatTable, scrollChatList, scrollRef, hundleAdd } = useChat(props.roomId)

  //スクロール制御
  useEffect(() => {
    scrollChatList()
  }, [props.hundleChat])

  if (!props.thread) {
    return null
  }

  if (props.thread === 'chat') {
    return (
      <>
        {props.isChatOpen ? (
          <div className="sm:max-w-xs sm:w-full bg-black text-white border-l border-gray-800 sm:block hidden">
            <div className="h-full flex items-end justify-center">
              <div className="w-11/12 mb-4">
                <div className="max-h-screen overflow-y-scroll">
                  <ul className=" text-sm text-opacity-80">
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

                <div className="mt-2 ">
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

                <ChatItem
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
          <ChatItem hundleChat={props.hundleChat} variety="open" />
        )}
      </>
    )
  }
  return props.thread
}
