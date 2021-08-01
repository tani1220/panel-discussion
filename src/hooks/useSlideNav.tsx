import { db } from 'firebase/clientApp'
import { useCallback, useRef, useState } from 'react'

type ChatTable = {
  message: string
  id: string
}[]

type FormProps = {
  theme: string
  name: string
  date: string
  time: string
  link: string
  discription: string
}

export const useSlideNav = () => {
  const [chatText, setChatText] = useState('')
  const [isChatOpen, isNotChatOpen] = useState(false)
  const [chatTable, setChatTable] = useState<ChatTable>([])
  const [data, setData] = useState({ theme: '', name: '', date: '', time: '', link: '', discription: '' })

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollChatList = useCallback(() => {
    scrollRef?.current?.scrollIntoView()
    console.log('ugoita')
  }, [scrollRef])

  const hundleAdd = async (data: FormProps) => {
    await db.collection('contents').doc(data.theme).set({
      theme: data.theme,
      name: data.name,
      date: data.date,
      time: data.time,
      link: data.link,
      discription: data.discription,
    })
    setData({ theme: '', name: '', date: '', time: '', link: '', discription: '' })
  }

  const hundleChange = useCallback(
    (e) => {
      const value = e.target.value
      setData({ ...data, [e.target.name]: value })
    },
    [data]
  )

  const hundleText = useCallback(
    (e) => {
      setChatText(e.target.value)
    },
    [chatText]
  )

  const hundleChat = useCallback(() => {
    isNotChatOpen(!isChatOpen)
  }, [isChatOpen])

  return {
    chatText,
    hundleText,
    setChatText,
    isChatOpen,
    hundleChat,
    chatTable,
    setChatTable,
    data,
    hundleChange,
    hundleAdd,
    scrollRef,
    scrollChatList,
  }
}
