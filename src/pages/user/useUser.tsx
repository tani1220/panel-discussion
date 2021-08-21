import { auth } from 'firebase/clientApp'
import { db } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type dataProps = {
  theme: string
}[]

export const useUser = (userId: string) => {
  const [data, setData] = useState<dataProps>([])
  const router = useRouter()

  // お題データを取得
  useEffect(() => {
    const unsub = db
      .collection('contents')
      .where('uid', '==', userId)
      .onSnapshot((querySnapshot) => {
        setData(querySnapshot.docs.map((doc) => ({ theme: doc.data().theme })))
      })
    return () => unsub()
  }, [])

  //認証情報がない場合はホーム画面に遷移
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      !user && router.push('/')
    })
    return () => unsub()
  }, [])

  return { data, setData }
}
