import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type dataProps = {
  theme: string
}[]

export const useUser = () => {
  const [data, setData] = useState<dataProps>([])
  const router = useRouter()

  //認証情報がない場合はホーム画面に遷移
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      !user && router.push('/')
    })
    return () => unsub()
  }, [])

  return { data, setData }
}
