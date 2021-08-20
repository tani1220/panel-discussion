import firebase from 'firebase'
import { auth } from 'firebase/clientApp'
import { db } from 'firebase/clientApp'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useState } from 'react'

export const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setLogin] = useState(true)

  const router = useRouter()

  const hundleEmail = useCallback(
    (e) => {
      setEmail(e.target.value)
    },
    [email]
  )

  const hundlePassword = useCallback(
    (e) => {
      setPassword(e.target.value)
    },
    [password]
  )

  // ログイン
  const signIn = useCallback(async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      await userid()
    } catch (error) {
      alert(error.message)
    }
  }, [email, password])

  // アカウント登録
  const register = useCallback(async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      await userid()
    } catch (error) {
      alert(error.message)
    }
  }, [email, password])

  //認証時にuidをコレクションに追加してユーザーページに遷移
  const userid = useCallback(async () => {
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
  const hundleTestLogin = useCallback(() => {
    setEmail('DiscussionTestEmail@yahoo.co.jp')
    setPassword('Password')
  }, [])

  return { signIn, hundleEmail, hundlePassword, email, password, isLogin, register, hundleTestLogin, setLogin }
}
