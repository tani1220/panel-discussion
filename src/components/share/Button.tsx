import { DOMAttributes, ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
  className?: string
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
}

export const Button: VFC<Props> = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${props.className}
			  ${'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'}
			`}
    >
      {props.children}
    </button>
  )
}
