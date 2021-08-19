import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { articlesCollectionRef } from 'src/hooks/useArticle'

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

  const articleAdd = useCallback(async (roomId) => {
    if (value.text.length > 0) {
      try {
        await articlesCollectionRef(roomId).add({
          question: value.text,
          name: value.name,
          createdAt: JSON.stringify(new Date()),
        })
        setValue({ text: '', name: '' })
        toast.success('質問しました！')
      } catch (error) {
        toast.error('送信エラーが発生！')
      }
    } else {
      return toast.error('質問がないよ！')
    }
    hundleDialog()
  }, [])

  return { value, setValue, hundleChange, open, hundleDialog, articleAdd }
}
