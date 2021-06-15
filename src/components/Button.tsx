import { ReactNode } from 'react'

type props = {
  children: ReactNode
  className?: string
}

export const Button = (props: props) => {
  return (
    <>
      <button
        className={`${props.className}
			  ${'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'}
			`}
      >
        {props.children}
      </button>
    </>
  )
}
