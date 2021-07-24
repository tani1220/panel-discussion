import { useCallback, useState } from 'react'

export const useChat = () => {
  const [chatText, setChatText] = useState('')
  const [chatList, setChatList] = useState<string[]>([])
  const [isChatOpen, isNotChatOpen] = useState(false)

  const hundleText = useCallback(
    (e) => {
      setChatText(e.target.value)
    },
    [chatText]
  )

  const hundleAdd = useCallback(() => {
    setChatList((prevChatList) => {
      return [...prevChatList, chatText]
    })
  }, [chatText])

  const hundleChat = useCallback(() => {
    isNotChatOpen(!isChatOpen)
  }, [isChatOpen])

  return { chatText, chatList, hundleText, hundleAdd, isChatOpen, isNotChatOpen, hundleChat }
}
