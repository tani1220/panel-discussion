import { useCallback, useState } from 'react'

type UserData = {
  name: string
  text: string
}

export const useInputText = () => {
  const [values, setValues] = useState({ text: '', name: '' })
  const [array, setArray] = useState<UserData[]>([])
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
    setArray((prevArray) => {
      return [...prevArray, values]
    })
  }

  return { values, array, hundleChange, hundleAdd, closeModal, openModal, isOpen }
}
