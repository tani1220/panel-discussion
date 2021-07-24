import Link from 'next/link'
import { ReactNode, VFC } from 'react'

type TextCardProps = {
  id: string
  children: ReactNode
}

export const TextCard: VFC<TextCardProps> = (props) => {
  const id = props.id

  return (
    <Link href={`/articles/${id}`}>
      <div className="max-w-xs sm:max-w-4xl p-4 sm:p-2 w-full bg-gray-800 rounded-xl mx-auto">
        <div className="items-center sm:px-2 sm:py-3">
          <div className="mx-3">
            <p className="text-xl sm:text-3xl font-mono text-gray-300">{props.children}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
