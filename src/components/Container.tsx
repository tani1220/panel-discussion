import { ReactNode } from 'react'
import { Header } from 'src/components/Header'

export const Container = (Props: { children: ReactNode }) => {
  const { children } = Props

  return (
    <>
      <div className="pb-20">
        <div className="px-3 pt-4 pb-8 mx-auto sm:px-4 sm:pb-14 ">
          <Header />
        </div>
        <div className="mx-auto w-full max-w-screen-md">{children}</div>
      </div>
    </>
  )
}
