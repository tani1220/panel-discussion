import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { useInputText } from 'src/hooks/useInputText'

const App = ({ Component, pageProps }: AppProps) => {
  const InputText = useInputText()
  return <Component {...pageProps} {...InputText} />
}

export default App
