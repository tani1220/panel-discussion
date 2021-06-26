import firebase from 'firebase/app'
import { db } from 'firebase/clientApp'
import { useCallback, useState } from 'react'

export const useInputText = () => {
  const [values, setValues] = useState({ text: '', name: '' })

  const [isOpen, setIsOpen] = useState(false)

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const hundleChange = useCallback(
    (e: any) => {
      const value = e.target.value
      setValues({ ...values, [e.target.name]: value })
    },
    [values]
  )

  const hundleAdd = () => {
    db.collection('tasks').add({
      question: values.text,
      name: values.name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValues({ text: '', name: '' })
  }

  return { values, hundleChange, hundleAdd, closeModal, openModal, isOpen }
}
