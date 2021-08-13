import { Dialog, Transition } from '@headlessui/react'
import { DocumentTextIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Button } from 'src/components/Button'
import { InputAdmin } from 'src/components/Form'
import { useAdmin } from 'src/hooks/useDialog/useAdmin'

export const AdminDialog = () => {
  const { value, hundleAdd, hundleChange, open, hundleDialog } = useAdmin()

  return (
    <div>
      <Button type="normal" className="contents sm:contents md:flex" onClick={hundleDialog}>
        <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
        <div className="ml-2 hidden sm:hidden md:block">お題作成</div>
      </Button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" static className="fixed z-10 inset-0 " open={open} onClose={hundleDialog}>
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
              <Dialog.Overlay className="fixed inset-0 sm:bg-white sm:bg-opacity-20 bg-black transition-opacity" />
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
              <div className="sm:h-5/6 h-full bg-black m-auto rounded-2xl sm:max-w-xl sm:w-full transform sm:mt-20">
                <div className="text-white flex justify-between items-center font-mono rounded-t-2xl bg-gray-900 p-2 px-6 sm:p-4">
                  <Button onClick={hundleDialog}>
                    <XIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" aria-hidden="true" />
                  </Button>

                  <h1 className="sm:text-xl text-md text-blue-100">お題を投稿する</h1>
                  <Button
                    type="normal"
                    className="py-0 px-3 rounded-2xl hover:bg-blue-900"
                    onClick={() => {
                      hundleDialog()
                      hundleAdd(value)
                    }}
                  >
                    送信
                  </Button>
                </div>

                <InputAdmin value={value} hundleChange={hundleChange} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
