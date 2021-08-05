import { Dialog, Transition } from '@headlessui/react'
import { DocumentTextIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { Button } from 'src/components/share/Button'

export const Admin = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button
        type="normal"
        className="contents md:contents lg:flex"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <DocumentTextIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
        <div className="ml-2 hidden md:hidden lg:block">お題作成</div>
      </Button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" static className="fixed z-10 inset-0 m-5" open={open} onClose={setOpen}>
          <div className="flex items-end justify-center h-screen ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 sm:bg-white sm:bg-opacity-10 bg-black transition-opacity" />
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
              <div className="sm:h-2/3 h-full bg-black m-auto rounded-2xl sm:max-w-xl sm:w-full transform sm:mt-20">
                <div className="text-white flex justify-between items-center font-mono p-2 border-b border-gray-700">
                  <Button
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <XIcon className="h-7 w-7" aria-hidden="true" />
                  </Button>

                  <h1 className="text-xl text-gray-300">お題を投稿する</h1>
                  <Button className="py-1 px-3 rounded-2xl bg-blue-600" onClick={() => setOpen(false)}>
                    送信
                  </Button>
                </div>

                <div className="h-5/6 flex overflow-y-auto">
                  <div className="w-full m-3">
                    <label htmlFor="theme" className="mb-2 block text-sm font-medium text-gray-500">
                      お題
                    </label>
                    <input
                      type="text"
                      name="theme"
                      id="theme"
                      autoComplete="off"
                      className="focus:outline-none w-full h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
                    />

                    <div className="mt-6">
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-500">
                        名前
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        className="focus:outline-none w-1/3 h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
                      />
                    </div>

                    <div className="mt-8 flex">
                      <div>
                        <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-500">
                          日付
                        </label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          autoComplete="off"
                          className="focus:outline-none h-8 px-2 mr-4 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="mb-2 block text-sm font-medium text-gray-500">
                          時間
                        </label>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          autoComplete="off"
                          className="focus:outline-none h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
                        />
                      </div>
                    </div>

                    <div className="mt-8">
                      <label htmlFor="Zoom URL" className="mb-2 block text-sm font-medium text-gray-500">
                        URL
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded rounded-r-none border-r-2 border-black bg-white bg-opacity-30 text-gray-300 text-sm">
                          http://
                        </span>
                        <input
                          type="text"
                          name="link"
                          id="link"
                          autoComplete="off"
                          className="focus:outline-none w-full h-8 px-2 sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded rounded-l-none"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>

                    <div className="mt-10">
                      <label htmlFor="discription" className="mb-2 block text-sm font-medium text-gray-500 mt-5">
                        詳細
                      </label>
                      <textarea
                        name="discription"
                        id="discription"
                        autoComplete="off"
                        className="text-white h-40 w-full p-2 focus:outline-none sm:text-sm bg-white bg-opacity-20 border-gray-300 rounded"
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
