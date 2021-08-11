import Link from 'next/link'
import { memo, VFC } from 'react'

import { Left as Props } from './types'

export const Left: VFC<Props> = memo((props) => {
  if (!props.left) {
    return null
  }
  if (props.left === 'title') {
    return (
      <div className="flex items-center md:text-5xl sm:text-3xl text-2xl font-bold text-blue-50">
        <Link href="/">
          <a>Panel discussion</a>
        </Link>
      </div>
    )
  }
  return props.left
})

Left.displayName = 'Left'
