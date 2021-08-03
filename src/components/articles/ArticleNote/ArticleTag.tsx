import { VFC } from 'react'

import { Modal } from './Modal'
import type { ArticleCard } from './types'

export const ArticleTag: VFC<ArticleCard> = (props) => {
  return (
    <Modal name={props.name} id={props.id} roomId={props.roomId}>
      <div className="max-w-xs sm:max-w-4xl p-4 sm:p-2 w-full bg-gray-800 rounded-xl mx-auto">
        <div className="sm:px-2 sm:py-3 mx-3">{props.children}</div>
      </div>
    </Modal>
  )
}
