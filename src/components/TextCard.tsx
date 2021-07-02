import Link from 'next/link'
import { ReactNode, VFC } from 'react'

type Props = {
  id: string
  children: ReactNode
}

export const TextCard: VFC<Props> = (props) => {
  const id = props.id
  return (
    <div className="flex">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 my-auto mr-4" />
      <Link href={`/tasks/${id}`}>
        <div className="flex max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="flex items-center px-2 py-3">
            <div className="mx-3">
              <p className="text-gray-600 text-3xl">{props.children}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
