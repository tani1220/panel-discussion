import { XIcon } from '@heroicons/react/solid'
import { VFC } from 'react'
import { SlideButton } from 'src/components/share/SlideNav/SlideButton'

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
                <button className="text-2xl" onClick={props.hundleChat}>
                  <XIcon className="text-white flex-shrink-0 h-6 w-6" aria-hidden="true" />
                </button>
                <p>ここにお題投稿フォームを作成</p>
              </div>
            </div>
          </div>
        ) : (
          <SlideButton hundleChat={props.hundleChat} />
        )}
      </>
    )
  }
  return null
}
