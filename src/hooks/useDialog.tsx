import { useCallback, useState } from 'react'

export const useDialog = () => {
  const [values, setValues] = useState({ text: '', name: '匿名さん' })
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

  return { values, setValues, hundleChange, closeModal, openModal, isOpen }
}
