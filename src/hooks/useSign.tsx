import firebase from 'firebase'
import { auth } from 'firebase/clientApp'
import { db } from 'firebase/clientApp'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useState } from 'react'

export const useSign = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignIn, setIsNotSignIn] = useState(true)

  const router = useRouter()

  const hundleEmail = useCallback(
    (e: any) => {
      setEmail(e.target.value)
    },
    [email]
  )

  const hundlePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value)
    },
    [password]
  )

  // useEffect( ()=> {
  //   //ログインやログアウトなど、認証関係に変更があると出力される。userには認証情報が入る
  //   auth.onAuthStateChanged((user)=>{
  //     user && router.push('/')
  //   })
  // })

  // ログイン
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      await userid()
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  // アカウント登録
  const register = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      await userid()
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  //ログイン、またアカウント登録時にuidをfirebase/Userコレクションに追加
  const userid = async () => {
    const user = firebase.auth().currentUser
    if (user !== null) {
      const uid = user.uid
      await db.collection('User').add({
        userId: uid,
      })
    }
  }

  // テストユーザー
  const hundleAuteLogin = () => {
    setEmail('DiscussionTestEmail@yahoo.co.jp')
    setPassword('Password')
  }

  return { signIn, hundleEmail, hundlePassword, email, password, isSignIn, register, hundleAuteLogin, setIsNotSignIn }
}
