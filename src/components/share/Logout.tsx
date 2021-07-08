import { auth } from 'firebase/clientApp'
import { useRouter } from 'next/router'
import { Button } from 'src/components/share/Button'

export const Logout = () => {
  const router = useRouter()

  const hundleLogout = async () => {
    try {
      await auth.signOut()
      router.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return <Button onClick={hundleLogout}>ログアウト</Button>
}
