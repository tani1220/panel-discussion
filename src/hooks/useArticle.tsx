import { db } from 'firebase/clientApp'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

type articlePost = {
  id: string
  question: string
  name: string
}[]

export const articlesCollectionRef = (id: string) => db.collection('contents').doc(id).collection(id)

export const useArticle = (roomId: string) => {
  const [articles, setArticles] = useState<articlePost>([])

  // 質問データ取得
  useEffect(() => {
    const unsubscribe = articlesCollectionRef(roomId)
      .orderBy('createdAt')
      .onSnapshot(
        (snapshot) => {
          setArticles(
            snapshot.docs.map((doc) => ({ id: doc.id, question: doc.data().question, name: doc.data().name }))
          )
        },
        (error) => {
          toast.error(error.message)
        }
      )
    return () => unsubscribe()
  }, [])

  return { articles }
}
