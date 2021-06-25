import firebase from 'firebase/app'
import { db } from 'lib/firebase'
import { useCallback, useEffect, useState } from 'react'
import type { UserData } from 'src/types/types'

export const useInputText = () => {
  const [values, setValues] = useState({ text: '', name: '' })
  const [tasks, setTasks] = useState<UserData[]>([{ id: '', question: '', name: '' }])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const unsubscribe = db
      .collection('tasks')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setTasks(snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data().question, name: doc.data().name })))
      })
    return () => unsubscribe()
  }, [])

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

  return { values, hundleChange, hundleAdd, closeModal, openModal, isOpen, tasks }
}
