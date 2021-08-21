import { db } from 'firebase/clientApp'
import { useCallback, useEffect, useRef, useState } from 'react'

type ChatTable = {
  message: string
  id: string
}[]

export const chatCollectionRef = (id?: string) => db.collection('contents').doc(id).collection('thread')

export const useChat = (roomId?: string) => {
  const [chatText, setChatText] = useState('')
  const [isChatOpen, isNotChatOpen] = useState(false)
  const [chatTable, setChatTable] = useState<ChatTable>([])

  //チャットデータ取得
  useEffect(() => {
    const unsub = chatCollectionRef(roomId)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setChatTable(snapshot.docs.map((doc) => ({ message: doc.data().message, id: doc.id })))
      })
    return () => unsub()
  }, [])

  //チャット送信
  const hundleAdd = useCallback(
    async (chatText) => {
      await chatCollectionRef(roomId).add({
        message: chatText,
        createdAt: JSON.stringify(new Date()),
      })
      setChatText('')
      scrollChatList()
    },
    [chatText]
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

  //スクロール制御
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollChatList = useCallback(() => {
    scrollRef?.current?.scrollIntoView()
  }, [scrollRef])

  return {
    chatText,
    hundleText,
    isChatOpen,
    hundleChat,
    chatTable,
    setChatTable,
    scrollRef,
    scrollChatList,
    hundleAdd,
  }
}
