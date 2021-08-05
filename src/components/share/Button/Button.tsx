import clsx from 'clsx'
import { DOMAttributes, ReactNode, VFC } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
  type?: 'normal' | 'mobilelMenu' | JSX.Element
}

export const Button: VFC<ButtonProps> = (props) => {
  const classes = clsx({
    'border border-blue-500 text-blue-400 hover:border-blue-700 hover:text-blue-700 font-bold py-2 px-4 rounded-xl':
      props.type === 'normal',
    'text-blue-50 font-mono text-base py-1 w-28': props.type === 'mobilelMenu',
  })
  return (
    <button type="button" onClick={props.onClick} className={clsx(classes, props.className)}>
      {props.children}
    </button>
  )
}
