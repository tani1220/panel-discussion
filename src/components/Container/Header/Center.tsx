import { memo, VFC } from 'react'
import { AdminDialog, UserDialog } from 'src/components/Dialog'

import { Center as Props } from './types'

export const Center: VFC<Props> = memo((props) => {
  if (!props.center) {
    return null
  }

  if (props.center === 'admin') {
    return (
      <div className="mr-3">
        <AdminDialog />
      </div>
    )
  }

  if (props.center === 'user') {
    return (
      <div className="mr-3">
        <UserDialog roomId={props.roomId} />
      </div>
    )
  }

  return props.center
})

Center.displayName = 'Center'
