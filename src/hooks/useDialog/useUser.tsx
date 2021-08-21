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

  // 質問投稿
  const articleAdd = useCallback(
    async (roomId) => {
      if (value.text.length > 0) {
        try {
          await articlesCollectionRef(roomId).add({
            question: value.text,
            name: value.name,
            createdAt: JSON.stringify(new Date()),
          })
          setValue({ text: '', name: '' })
          toast.success('Posted!')
        } catch (error) {
          toast.error('failed!')
        }
      } else {
        return toast.error('no questions!')
      }
      hundleDialog()
    },
    [value]
  )

  return { value, setValue, hundleChange, open, hundleDialog, articleAdd }
}
