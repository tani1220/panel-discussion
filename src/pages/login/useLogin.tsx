import firebase from 'firebase'
import { auth } from 'firebase/clientApp'
import { db } from 'firebase/clientApp'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

export const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setLogin] = useState(true)

  const router = useRouter()

  const handleEmail = useCallback(
    (e) => {
      setEmail(e.target.value)
    },
    [email]
  )

  const handlePassword = useCallback(
    (e) => {
      setPassword(e.target.value)
    },
    [password]
  )

  // ログイン
  const signIn = useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      await userId()
      toast.success('logged in!')
    } catch (error) {
      toast.error('failed!')
    }
  }, [email, password])

  // アカウント登録
  const register = useCallback(async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      await userId()
      toast.success('registered!')
    } catch (error) {
      toast.error('failed!')
    }
  }, [email, password])

  //認証時にuidをコレクションに追加してユーザーページに遷移
  const userId = useCallback(async () => {
    const user = firebase.auth().currentUser

    if (user !== null) {
      const uid = user.uid
      await db.collection('users').doc(uid).set({
        userId: uid,
      })
      auth.onAuthStateChanged((user) => {
        user &&
          router.push({
            pathname: '/user/[userId]',
            query: { userId: user.uid },
          })
      })
    }
  }, [signIn, register])

  // テストユーザー
  const handleTestLogin = useCallback(() => {
    setEmail('DiscussionTestEmail@yahoo.co.jp')
    setPassword('Password')
  }, [])

  return { signIn, handleEmail, handlePassword, email, password, isLogin, register, handleTestLogin, setLogin }
}
