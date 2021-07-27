import { Dialog, Transition } from '@headlessui/react'
import { Fragment, VFC } from 'react'
import { Button } from 'src/components/share/Button/Button'
import { useDialog } from 'src/hooks/useDialog'

type ModalProps = { handleSubmit: (arg0: { text: string; name: string }) => void }

export const ArticleModal: VFC<ModalProps> = (props) => {
  const { values, hundleChange, closeModal, openModal, isOpen, setValues } = useDialog()

  return (
    <div>
      <Button onClick={openModal}>投稿する</Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment} leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    名前
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={hundleChange}
                    placeholder="記入しない場合は匿名"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                    質問内容
                  </label>
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="question"
                    type="text"
                    name="text"
                    value={values.text}
                    onChange={hundleChange}
                    placeholder="質問を入力して下さい"
                  ></input>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <Button
                    onClick={() => {
                      props.handleSubmit(values)
                      setValues({ text: '', name: '' })
                      closeModal()
                    }}
                  >
                    送信
                  </Button>
                  <Button onClick={closeModal}>閉じる</Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
