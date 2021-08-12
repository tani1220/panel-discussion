import firebase from 'firebase'
import { db } from 'firebase/clientApp'
import { useCallback, useEffect, useState } from 'react'

export type AdminFormProps = {
  theme: string
  name: string
  date: string
  time: string
  link: string
  discription: string
}

export const useAdmin = () => {
  const [value, setValue] = useState({ theme: '', name: '', date: '', time: '', link: '', discription: '' })
  const [user, userId] = useState({ uid: '' })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const user = firebase.auth().currentUser

    if (user !== null) {
      const uid = user.uid
      userId({ ...value, uid: uid })
    }
  }, [])

  const hundleDialog = useCallback(() => {
    setOpen(!open)
  }, [open])

  const hundleAdd = async (data: AdminFormProps) => {
    await db.collection('contents').doc(data.theme).set({
      theme: data.theme,
      name: data.name,
      date: data.date,
      time: data.time,
      link: data.link,
      discription: data.discription,
      uid: user.uid,
    })
    setValue({ theme: '', name: '', date: '', time: '', link: '', discription: '' })
  }

  const hundleChange = useCallback(
    (e) => {
      const data = e.target.value
      setValue({ ...value, [e.target.name]: data })
    },
    [value]
  )

  return { value, hundleChange, hundleAdd, open, hundleDialog }
}
