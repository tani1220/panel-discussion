import clsx from 'clsx'
import { DOMAttributes, ReactNode, VFC } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
  type?: 'normal' | 'mobileMenu' | JSX.Element
}

export const Button: VFC<ButtonProps> = (props) => {
  const classes = clsx({
    'border border-blue-500 text-blue-400 hover:border-blue-700 hover:text-blue-700 font-bold sm:py-2 sm:px-4 px-2 py-1 rounded-xl':
      props.type === 'normal',
    'text-blue-50 font-mono text-base py-1 w-28': props.type === 'mobileMenu',
  })
  return (
    <button type="button" onClick={props.onClick} className={clsx(classes, props.className)}>
      {props.children}
    </button>
  )
}
