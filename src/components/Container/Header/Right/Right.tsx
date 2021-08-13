import Link from 'next/link'
import { memo, VFC } from 'react'
import { Button } from 'src/components/Button'

import { Right as Props } from '../types'
import { Logout } from './Item/Logout'
import { MobileMenu } from './Item/MobileMenu'

export const Right: VFC<Props> = memo((props) => {
  if (!props.right) {
    return null
  }
  if (props.right === 'menu') {
    return (
      <div>
        <div className={props.isChatOpen ? 'hidden' : 'hidden lg:block'}>
          <div className="flex">
            <Link href="/login">
              <Button type="normal" className="mr-3">
                管理者
              </Button>
            </Link>
            <Logout buttonType="normal" />
          </div>
        </div>

        {/* 携帯画面 */}
        <div className={props.isChatOpen ? 'text-gray-300 bg-black flex items-center' : 'lg:hidden'}>
          <MobileMenu />
        </div>
      </div>
    )
  }
  return props.right
})

Right.displayName = 'Right'
