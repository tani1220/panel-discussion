import { useCallback, useState } from 'react'

export const useInputText = () => {
  const [text, setText] = useState('')
  const [array, setArray] = useState<(string | number)[]>([])

  const hundleChange = useCallback((e: any) => {
    setText(e.target.value)
  }, [])

  const hundleAdd = useCallback(() => {
    setArray((prevArray) => {
      return [...prevArray, text]
    })
  }, [text])
  return { text, array, hundleChange, hundleAdd }
}
