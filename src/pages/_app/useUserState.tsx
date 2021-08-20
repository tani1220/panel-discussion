import firebase from 'firebase'
import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useUserState = () => {
  const [isLogin, setIsNotLogin] = useState(false)

  const user = firebase.auth().currentUser
  const router = useRouter()

  // ユーザーの状態確認
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      user && setIsNotLogin(true)
      !user && setIsNotLogin(false)
    })
    return () => unsub()
  }, [])

  // ユーザー画面に遷移
  useEffect(() => {
    if (user && isLogin && router.asPath === '/login') {
      router.push({
        pathname: `/user/${user.uid}`,
        query: { userId: user.uid },
      })
    }
  }, [router.asPath])

  // ログアウト
  const hundleLogout = useCallback(async () => {
    try {
      await auth.signOut()
      router.push('/')
      toast.success('ログアウトしました。')
    } catch (error) {
      toast.error('エラーが発生しました。')
    }
  }, [])

  // Prefetch
  useEffect(() => {
    router.prefetch(`/user/${user?.uid}`)
    router.prefetch('/')
  }, [isLogin])

  return { isLogin, hundleLogout }
}
