import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, UserGroupIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { VFC } from 'react'

type ThemeCardProps = {
  id: string
  theme: string
  name: string
  date: string
  time: string
}

export const ThemeList: VFC<ThemeCardProps> = (props) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between bg-gray-900 rounded-md mx-4 p-5 mt-5">
      <div className="flex-1 min-w-0">
        <Link href={`/rooms/${props.id}`}>
          <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl hover:text-blue-500 cursor-pointer">
            {props.theme}
          </h1>
        </Link>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.date}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.time}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <EmojiHappyIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {props.name}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UserGroupIcon className="mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            参加者
          </div>
        </div>
      </div>
    </div>
  )
}
