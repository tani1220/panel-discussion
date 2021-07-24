import { db } from 'firebase/clientApp'
import { useCallback, useState } from 'react'

export const useNote = () => {
  const [navIsOpen, navIsNotOpen] = useState(false)
  const [isChatOpen, isNotChatOpen] = useState(false)

  const articleDelete = async (id: string) => {
    await db.collection('contents').doc(id).delete()
  }

  const articleAdd = async (values: { text: string; name: string }) => {
    await db.collection('articles').add({
      question: values.text,
      name: values.name,
      createdAt: JSON.stringify(new Date()),
    })
  }

  const hundleChat = useCallback(() => {
    isNotChatOpen(!isChatOpen)
  }, [isChatOpen])

  return { articleDelete, articleAdd, navIsOpen, navIsNotOpen, isChatOpen, isNotChatOpen, hundleChat }
}
