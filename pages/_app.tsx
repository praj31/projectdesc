import type { AppProps } from 'next/app'
import { useEffect, useMemo, useReducer, useState } from 'react'
import { setTheme } from '../util/theme'
import { StateContext } from '../context'
import { reducer } from '../reducer'
import { initialState } from '../reducer/state'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true)

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setTheme()
    setLoading(false)
  }, [])

  const globalState = useMemo(() => {
    return { state, dispatch }
  }, [state])

  if (loading) {
    return (
      <div className='loading'>
        <h1>ProjectDesc</h1>
      </div>
    )
  }

  return (
    <StateContext.Provider value={globalState}>
      <Component {...pageProps} />
    </StateContext.Provider>
  )
}

export default MyApp
