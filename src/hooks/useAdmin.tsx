import { db } from 'firebase/clientApp'
import { useCallback, useState } from 'react'

type FormProps = {
  theme: string
  name: string
  date: string
  time: string
  link: string
  discription: string
}

export const useAdmin = () => {
  const [data, setData] = useState({ theme: '', name: '', date: '', time: '', link: '', discription: '' })

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

  return { data, hundleChange, hundleAdd }
}
