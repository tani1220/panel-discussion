import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { articlesCollectionRef } from 'src/hooks/useArticle'

export const useList = (roomId: string) => {
  const [open, setOpen] = useState(false)

  const handleDialog = useCallback(() => {
    setOpen(!open)
  }, [open])

  //質問データ削除
  const articleDelete = useCallback(async (id) => {
    try {
      await articlesCollectionRef(roomId).doc(id).delete()
      toast('Deleted!')
    } catch (error) {
      toast.error('failed!')
    }
    handleDialog()
  }, [])

  return { articleDelete, handleDialog, open }
}
