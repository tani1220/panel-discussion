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
              className="mt-10 origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  <Link href="/login">
                    <Button className="mr-3">管理者</Button>
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Logout />
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
