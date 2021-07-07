import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useState } from 'react'

export const useSign = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignIn, setIsNotSignIn] = useState(true)

  // useEffect( ()=> {
  //   //ログインやログアウトなど、認証関係に変更があると出力される。userには認証情報が入る
  //   auth.onAuthStateChanged((user)=>{
  //     user && router.push('/')
  //   })
  // })

  const router = useRouter()

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  const register = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

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

  const hundleBoolean = useCallback(() => {
    setIsNotSignIn(!isSignIn)
  }, [])

  const hundleAuteLogin = () => {
    setEmail('DiscussionTestEmail@yahoo.co.jp')
    setPassword('Password')
  }

  return { signIn, hundleEmail, hundlePassword, email, password, isSignIn, register, hundleBoolean, hundleAuteLogin }
}
