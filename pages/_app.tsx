import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const { setPreferredTheme } = useTheme()

  useEffect(() => {
    setPreferredTheme()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h1>ProjectDesc</h1>
      </div>
    )
  }

  return <Component {...pageProps} />
}

export default MyApp
