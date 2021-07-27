import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from 'src/components/share/Button/Button'

export const Logout = () => {
  const router = useRouter()
  const [isLogin, setIsNotLogin] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user && setIsNotLogin(true)
    })
    return () => unsubscribe()
  }, [])

  const hundleLogout = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return <div>{isLogin ? <Button onClick={hundleLogout}>ログアウト</Button> : null}</div>
}
