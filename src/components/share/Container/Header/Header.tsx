import { VFC } from 'react'

import { Center } from './Center'
import { Left } from './Left'
import { Right } from './Right'
import { HeaderProps } from './types'

export const Header: VFC<HeaderProps> = (props) => {
  return (
    <header>
      <div className={props.isChatOpen ? 'w-full' : 'w-full fixed'}>
        <div className="flex justify-between items-center mx-auto border-gray-800 border-b sm:py-3 sm:px-14 p-4 bg-black">
          <Left left={props.left} />

          <div className="flex items-center">
            <Center center={props.center} roomId={props.roomId} />
            <Right right={props.right} isChatOpen={props.isChatOpen} />
          </div>
        </div>
      </div>
    </header>
  )
}
