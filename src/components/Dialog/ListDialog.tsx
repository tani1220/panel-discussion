import { Dialog, Transition } from '@headlessui/react'
import { Fragment, VFC } from 'react'
import { ReactNode } from 'react'
import { Button } from 'src/components/Button'
import { useList } from 'src/hooks/useDialog/useList'
import { useUserState } from 'src/pages/_app/useUserState'

type ListDialogProps = {
  id: string
  name: string
  children: ReactNode
  roomId: string
}

export const ListDialog: VFC<ListDialogProps> = (props) => {
  const { articleDelete, handleDialog, open } = useList(props.roomId)
  const { isLogin } = useUserState()

  return (
    <div>
      <a className="text-white block whitespace-pre-wrap" onClick={handleDialog}>
        {props.children}
      </a>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" static className="fixed z-10 inset-0 m-5 overflow-y-auto" open={open} onClose={handleDialog}>
          <div className="flex items-end justify-center h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="m-auto rounded sm:max-w-4xl sm:w-full transform">
                <Dialog.Title
                  as="h1"
                  className="sm:text-4xl text-xl font-medium text-center text-gray-200 whitespace-pre-wrap"
                >
                  {props.children}
                </Dialog.Title>
                <Dialog.Title as="h3" className="text-xl sm:text-2xl font-medium text-center text-gray-300 mt-14">
                  {props.name}
                </Dialog.Title>

                <div className="bg-gray-900 px-4 py-3 sm:px-6 flex sm:flex-row-reverse">
                  {isLogin ? (
                    <Button
                      className="mt-3 mr-2 sm:mt-0 sm:ml-3 sm:w-auto text-sm px-4 py-2 w-full justify-center rounded bg-red-600 font-medium text-white hover:bg-red-700 outline-none"
                      onClick={() => articleDelete(props.id)}
                    >
                      ??????
                    </Button>
                  ) : null}

                  <Button
                    className="mt-3 sm:mt-0 sm:ml-3 sm:w-auto text-sm px-4 py-2 w-full justify-center rounded bg-white font-medium text-gray-700 hover:bg-gray-50"
                    onClick={handleDialog}
                  >
                    ??????
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
