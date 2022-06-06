import type { AppProps } from 'next/app'
import { useEffect, useReducer, useState } from 'react'
import { setDarkTheme } from '../util/theme'
import { StateContext } from '../context'
import { reducer } from '../reducer'
import { initialState } from '../reducer/state'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true)

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (!theme) {
      setDarkTheme('light')
      document.body.classList.remove('dark')
    }
    if (theme === 'dark') {
      setDarkTheme('dark')
      document.body.classList.add('dark')
    }
    if (theme === 'light') {
      setDarkTheme('light')
      document.body.classList.remove('dark')
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h1>ProjectDesc</h1>
      </div>
    )
  }

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </StateContext.Provider>
  )
}

export default MyApp
