import firebase from 'firebase'
import { auth } from 'firebase/clientApp'
import { db } from 'firebase/clientApp'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useEffect, useState } from 'react'

export const useSign = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignIn, setIsNotSignIn] = useState(true)

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
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      await userid()
    } catch (error) {
      alert(error.message)
    }
  }

  // アカウント登録
  const register = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      await userid()
    } catch (error) {
      alert(error.message)
    }
  }

  //認証時にuidをコレクションに追加してユーザーページに遷移
  const userid = async () => {
    const user = firebase.auth().currentUser

    if (user !== null) {
      const uid = user.uid
      await db.collection('users').doc(uid).set({
        userId: uid,
      })
      auth.onAuthStateChanged((user) => {
        user &&
          router.push({
            pathname: '/users/[userId]',
            query: { userId: user.uid },
          })
      })
    }
  }

  //既に認証IDを持っていたらuserページに遷移
  useEffect(() => {
    const user = firebase.auth().currentUser

    if (user) {
      const uid = user.uid
      router.push({
        pathname: '/users/[userId]',
        query: { userId: uid },
      })
    }
  }, [])

  // テストユーザー
  const hundleAuteLogin = () => {
    setEmail('DiscussionTestEmail@yahoo.co.jp')
    setPassword('Password')
  }

  return { signIn, hundleEmail, hundlePassword, email, password, isSignIn, register, hundleAuteLogin, setIsNotSignIn }
}
