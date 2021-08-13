import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { PencilIcon } from '@heroicons/react/solid'
import { db } from 'firebase/clientApp'
import { Fragment, VFC } from 'react'
import { Button } from 'src/components/Button'
import { InputUser } from 'src/components/Form'
import { useUser } from 'src/hooks/useDialog/useUser'

type addArticleProps = {
  roomId?: string
}

export const UserDialog: VFC<addArticleProps> = (props) => {
  const { value, setValue, hundleChange, open, hundleDialog } = useUser()

  const articleAdd = async (value: { text: string; name: string }) => {
    if (props.roomId) {
      await db
        .collection('contents')
        .doc(props.roomId)
        .collection(props.roomId)
        .add({
          question: value.text,
          name: value.name,
          createdAt: JSON.stringify(new Date()),
        })
    }
  }

  return (
    <div>
      <Button type="normal" className="contents md:contents lg:flex" onClick={hundleDialog}>
        <PencilIcon className="h-6 w-6" aria-hidden="true" />
        <div className="ml-2 hidden md:hidden lg:block">質問する</div>
      </Button>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={hundleDialog}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment} leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-25" />
            </Transition.Child>

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
              <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-black rounded-3xl">
                <InputUser hundleChange={hundleChange} value={value} />

                <div className="flex justify-between items-center p-3 border-t border-gray-700">
                  <Button onClick={hundleDialog}>
                    <XIcon className="h-7 w-7 text-blue-500 hover:text-blue-700" aria-hidden="true" />
                  </Button>

                  <Button
                    type="normal"
                    className="rounded-3xl"
                    onClick={() => {
                      articleAdd(value)
                      setValue({ text: '', name: '' })
                      hundleDialog()
                    }}
                  >
                    送信する
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
