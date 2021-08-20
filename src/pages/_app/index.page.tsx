import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { test } from 'src/lib/test'

const App = ({ Component, pageProps }: AppProps) => {
  test()
  return (
    <div>
      <Component {...pageProps} />
      <Toaster
        containerClassName="font-mono"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#666666',
            color: 'white',
          },
        }}
      />
    </div>
  )
}

export default App
