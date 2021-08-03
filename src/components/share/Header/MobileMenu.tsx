import { Menu, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Fragment } from 'react'
import { Button } from 'src/components/share/Button'

import { Logout } from './Logout'

export const MobileMenu = () => {
  return (
    <Menu as="div" className="relative flex text-left">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center">
            <MenuIcon className="h-7 w-7" aria-hidden="true" />
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="mt-10 absolute right-0 rounded-md bg-black bg-opacity-50 border border-gray-500 cursor-pointer"
            >
              <div className="py-1">
                <div className="hover:bg-blue-600">
                  <Menu.Item>
                    <Link href="/login">
                      <Button type="mobilelMenu">管理者</Button>
                    </Link>
                  </Menu.Item>
                </div>

                <div className="hover:bg-blue-600">
                  <Menu.Item>
                    <Logout buttonType="mobilelMenu" />
                  </Menu.Item>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
