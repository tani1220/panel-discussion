import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { useEffect, useState, VFC } from 'react'
import { Button } from 'src/components/Button'

import { Logout as Props } from '../../types'

export const Logout: VFC<Props> = (props) => {
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
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      {isLogin ? (
        <Button type={props.buttonType} onClick={hundleLogout}>
          ログアウト
        </Button>
      ) : null}
    </div>
  )
}
