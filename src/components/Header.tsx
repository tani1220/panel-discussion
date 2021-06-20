import { VFC } from 'react'
import { Modal } from 'src/components/Modal'
import type { ModalInputType } from 'src/types/types'

type Props = ModalInputType

export const Header: VFC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <a className="text-2xl bg-gray-800 text-white py-1 px-4 rounded-md">QIN</a>
        <p className="font-bold text-4xl text-center text-gray-500">Panel discussion</p>
        <Modal
          values={props.values}
          hundleChange={props.hundleChange}
          hundleAdd={props.hundleAdd}
          closeModal={props.closeModal}
          openModal={props.openModal}
          isOpen={props.isOpen}
        />
      </div>
    </>
  )
}
