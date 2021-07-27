import { useCallback, useState } from 'react'

type ChatTable = {
  message: string
  id: string
}[]

export const useChat = () => {
  const [chatText, setChatText] = useState('')
  const [isChatOpen, isNotChatOpen] = useState(false)
  const [chatTable, setChatTable] = useState<ChatTable>([])

  const hundleText = useCallback(
    (e) => {
      setChatText(e.target.value)
    },
    [chatText]
  )

  const hundleChat = useCallback(() => {
    isNotChatOpen(!isChatOpen)
  }, [isChatOpen])

  return { chatText, hundleText, setChatText, isChatOpen, isNotChatOpen, hundleChat, chatTable, setChatTable }
}
