import { Dialog, Transition } from '@headlessui/react'
import { DocumentTextIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Button } from 'src/components/share/Button'
import { useAdmin } from 'src/hooks/useAdmin'

export const AdminForm = () => {
  const [open, setOpen] = useState(false)
  const { data, hundleChange, hundleAdd } = useAdmin()

  return (
    <div>
      <Button
        type="normal"
        className="contents sm:contents md:flex"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
        <div className="ml-2 hidden sm:hidden md:block">お題作成</div>
      </Button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" static className="fixed z-10 inset-0 " open={open} onClose={setOpen}>
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
                  <Button
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <XIcon className="h-6 w-6 text-blue-500 hover:text-blue-700" aria-hidden="true" />
                  </Button>

                  <h1 className="sm:text-xl text-md text-blue-100">お題を投稿する</h1>
                  <Button
                    type="normal"
                    className="py-0 px-3 rounded-2xl hover:bg-blue-900"
                    onClick={() => {
                      setOpen(false)
                      hundleAdd(data)
                    }}
                  >
                    送信
                  </Button>
                </div>

                <div className="h-5/6 flex overflow-y-auto">
                  <div className="w-full m-8">
                    <input
                      type="text"
                      name="theme"
                      id="theme"
                      value={data.theme}
                      onChange={hundleChange}
                      autoComplete="off"
                      className="focus:outline-none focus:border-blue-900 w-full text-white h-8 px-2 sm:text-sm bg-black border-b border-gray-500"
                      placeholder="タイトルを入力"
                    />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={data.name}
                      onChange={hundleChange}
                      autoComplete="off"
                      className="focus:outline-none focus:border-blue-900 sm:w-1/3 w-2/4 text-white h-8 px-2 sm:text-sm bg-black border-b border-gray-500 my-8"
                      placeholder="名前を入力"
                    />
                    <div className="my-8 flex">
                      <div>
                        <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-400">
                          日付
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          value={data.date}
                          onChange={hundleChange}
                          className="focus:outline-none h-8 px-2 mr-4 sm:text-sm bg-white bg-opacity-30 border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="mb-1 block text-sm font-medium text-gray-400">
                          時間
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          value={data.time}
                          onChange={hundleChange}
                          className="focus:outline-none h-8 px-2 sm:text-sm bg-white bg-opacity-30 border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div className="my-8">
                      <label htmlFor="Zoom URL" className="mb-1 block text-sm font-medium text-gray-500">
                        URL
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded rounded-r-none border-r-2 border-black bg-white bg-opacity-10 text-gray-300 text-sm">
                          https://
                        </span>
                        <input
                          type="text"
                          name="link"
                          id="link"
                          value={data.link}
                          onChange={hundleChange}
                          autoComplete="off"
                          className="focus:outline-none focus:border-blue-900 w-full text-white h-8 px-2 sm:text-sm bg-black border-b border-gray-500"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>

                    <div className="my-8">
                      <label htmlFor="discription" className="mb-1 block text-sm font-medium text-gray-500 mt-5">
                        詳細
                      </label>
                      <textarea
                        name="discription"
                        id="discription"
                        value={data.discription}
                        onChange={hundleChange}
                        autoComplete="off"
                        className="focus:outline-none focus:border-blue-900 w-full text-white h-40 p-2 sm:text-sm bg-black border border-gray-500 rounded"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
