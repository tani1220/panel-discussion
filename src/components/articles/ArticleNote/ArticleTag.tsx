import { VFC } from 'react'

import { Modal } from './Modal'
import type { ArticleCard } from './types'

export const ArticleTag: VFC<ArticleCard> = (props) => {
  return (
    <div className="pt-4 text-lg mx-5 sm:mx-10 md:text-2xl xl:text-3xl cursor-pointer">
      <div className="w-auto bg-gray-800 rounded-xl p-4">
        <Modal name={props.name} id={props.id} roomId={props.roomId}>
          {props.children}
        </Modal>
      </div>
    </div>
  )
}
