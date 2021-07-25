import { useCallback, useState } from 'react'

export const useChat = () => {
  const [chatText, setChatText] = useState('')
  const [isChatOpen, isNotChatOpen] = useState(false)

  const hundleText = useCallback(
    (e) => {
      setChatText(e.target.value)
    },
    [chatText]
  )

  const hundleChat = useCallback(() => {
    isNotChatOpen(!isChatOpen)
  }, [isChatOpen])

  return { chatText, hundleText, setChatText, isChatOpen, isNotChatOpen, hundleChat }
}
