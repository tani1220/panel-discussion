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
    'bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded': props.type === 'normal',
    'text-white font-mono text-base py-1 w-28': props.type === 'mobilelMenu',
  })
  return (
    <button type="button" onClick={props.onClick} className={clsx(classes, props.className)}>
      {props.children}
    </button>
  )
}
