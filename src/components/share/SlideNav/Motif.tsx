// import { XIcon } from '@heroicons/react/solid'
import { VFC } from 'react'

import { Form } from './From'
import { SlideMenu } from './SlideMenu'
import { ChatType, ThreadType } from './types'

type MotifProps = ThreadType & ChatType

export const Motif: VFC<MotifProps> = (props) => {
  if (props.thread === 'motif') {
    return (
      <>
        {props.isChatOpen ? (
          <div className="sm:max-w-lg sm:w-full bg-black text-white">
            <div className="h-full flex justify-center">
              <div className="w-11/12">
                <Form hundleChat={props.hundleChat} />
              </div>
            </div>
          </div>
        ) : (
          <SlideMenu hundleChat={props.hundleChat} variety="openMotif" />
        )}
      </>
    )
  }
  return null
}
