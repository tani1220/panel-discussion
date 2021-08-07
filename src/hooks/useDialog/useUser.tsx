import { useCallback, useState } from 'react'

export const useUser = () => {
  const [value, setValue] = useState({ text: '', name: '' })
  const [open, setOpen] = useState(false)

  const hundleDialog = useCallback(() => {
    setOpen(!open)
  }, [open])

  const hundleChange = useCallback(
    (e) => {
      const data = e.target.value
      setValue({ ...value, [e.target.name]: data })
    },
    [value]
  )

  return { value, setValue, hundleChange, open, hundleDialog }
}
