import Link from 'next/link'
import { ReactNode, VFC } from 'react'
import { Button } from 'src/components/share/Button'

type Props = {
  children: ReactNode
}

export const Sign: VFC<Props> = (props) => {
  return (
    <div>
      <Link href="/login">
        <Button>{props.children}</Button>
      </Link>
    </div>
  )
}
