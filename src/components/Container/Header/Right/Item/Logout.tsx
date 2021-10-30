import { VFC } from 'react'
import { Button } from 'src/components/Button'
import { useUserState } from 'src/pages/_app/useUserState'

import { Logout as Props } from '../../types'

export const Logout: VFC<Props> = (props) => {
  const { isLogin, handleLogout } = useUserState()

  return (
    <div>
      {isLogin ? (
        <Button type={props.buttonType} onClick={handleLogout}>
          ログアウト
        </Button>
      ) : null}
    </div>
  )
}
