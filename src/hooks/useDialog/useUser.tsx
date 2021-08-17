import { db } from 'firebase/clientApp'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

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

  const articleAdd = async (roomId: any) => {
    if (value.text.length > 0) {
      try {
        await db
          .collection('contents')
          .doc(roomId)
          .collection(roomId)
          .add({
            question: value.text,
            name: value.name,
            createdAt: JSON.stringify(new Date()),
          })
        toast.success('質問しました！')
      } catch (error) {
        toast.error('送信エラーが発生！')
      }
    } else {
      return toast.error('質問がないよ！')
    }
    setValue({ text: '', name: '' })
    hundleDialog()
  }

  return { value, setValue, hundleChange, open, hundleDialog, articleAdd }
}
