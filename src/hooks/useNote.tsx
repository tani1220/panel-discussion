import { db } from 'firebase/clientApp'
import { useState } from 'react'

export const useNote = () => {
  const [navIsOpen, navIsNotOpen] = useState(false)

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

  return { articleDelete, articleAdd, navIsOpen, navIsNotOpen }
}
