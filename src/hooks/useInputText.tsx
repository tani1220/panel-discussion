import { useState } from 'react'

type UserData = {
  name: string
  text: string
}

export const useInputText = () => {
  const [values, setValues] = useState({ text: '', name: '' })
  const [array, setArray] = useState<UserData[]>([])

  const hundleChange = (e: any) => {
    const value = e.target.value
    setValues({ ...values, [e.target.name]: value })
  }

  const hundleAdd = () => {
    setArray((prevArray) => {
      return [...prevArray, values]
    })
  }

  return { values, array, hundleChange, hundleAdd }
}
