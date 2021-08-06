import { Menu, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
import { Fragment, VFC } from 'react'
import { Button } from 'src/components/share/Button'

type ThemeCardProps = {
  id: string
  theme: string
  name: string
  date: string
  time: string
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Theme: VFC<ThemeCardProps> = (props) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between bg-gray-900 rounded-md mx-4 p-5 mt-5">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-100 sm:text-3xl sm:truncate">{props.theme}</h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.date}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.time}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <EmojiHappyIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.name}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UserGroupIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            参加者
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <Link href={`/rooms/${props.id}`}>
            <Button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Join
            </Button>
          </Link>
        </span>

        {/* Dropdown */}
        <Menu as="span" className="ml-3 relative">
          {({ open }) => (
            <>
              <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                More
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
              </Menu.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Zoom link
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Discription
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  )
}
