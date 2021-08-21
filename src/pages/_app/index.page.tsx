import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { useUserState } from './useUserState'

const App = ({ Component, pageProps }: AppProps) => {
  useUserState()

  return (
    <div>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        containerClassName="font-mono"
        toastOptions={{
          duration: 2000,
          success: {
            icon: '👏',
          },
          blank: {
            icon: '🔥',
          },
          error: {
            icon: '🤯',
          },
        }}
      />
    </div>
  )
}

export default App
