import { db } from 'firebase/clientApp'
import { useCallback, useState } from 'react'
import type { AdminFormProps } from 'src/types'

export const useAdmin = () => {
  const [value, setValue] = useState({ theme: '', name: '', date: '', time: '', link: '', discription: '' })
  const [open, setOpen] = useState(false)

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
