import { db } from 'firebase/clientApp'
import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

type dataProps = {
  theme: string
}[]

export const useUser = () => {
  const [data, setData] = useState<dataProps>([])
  const router = useRouter()

  //認証情報がない場合はホーム画面に遷移
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      !user && router.push('/')
    })
    return () => unsubscribe()
  }, [])

  //お題UIDとユーザーUIDが一致していれば、そのデータを取得してdataに格納
  const fetchUser = useCallback(async (userData) => {
    await db
      .collection('contents')
      .where('uid', '==', userData.userId)
      .get()
      .then((querySnapshot) => {
        setData(querySnapshot.docs.map((doc) => ({ theme: doc.data().theme })))
      })
  }, [])

  return { data, fetchUser }
}
