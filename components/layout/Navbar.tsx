import Link from 'next/link'
import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../context'
import { ACTIONS } from '../../reducer/actions'
import { isDarkThemeSet, setDarkTheme } from '../../util/theme'

const Navbar: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(StateContext)
  const [toggle, setToggle] = useState<boolean>(isDarkThemeSet)
  console.log('Nav')
  useEffect(() => {
    if (state.sidebarOpen) {
      document.querySelector('.sidebar')?.classList.add('sidebar-open')
      document.querySelector('.theme-default-content')?.classList.add('pad-l')
    } else {
      document.querySelector('.sidebar')?.classList.remove('sidebar-open')
      document
        .querySelector('.theme-default-content')
        ?.classList.remove('pad-l')
    }
  }, [state.sidebarOpen])

  useEffect(() => {
    if (toggle) {
      setDarkTheme('dark')
      document.body.classList.add('dark')
    } else {
      setDarkTheme('light')
      document.body.classList.remove('dark')
    }
  }, [toggle])

  return (
    <header className='navbar'>
      <div className='sidebar-brand'>
        <div
          className='sidebar-button'
          role={'button'}
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_SIDEBAR,
              payload: { sidebarOpen: !state.sidebarOpen },
            })
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            viewBox='0 0 448 512'
            className='icon'
          >
            <path
              fill='currentColor'
              d='M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'
            ></path>
          </svg>
        </div>
        <Link href={'/'}>
          <a className='site-name'>
            Project<span>Desc</span>
          </a>
        </Link>
      </div>
      <div className='links'>
        <nav className='nav-links'>
          <div
            className='nav-item icon'
            role={'button'}
            onClick={() => setToggle(!toggle)}
          >
            {!toggle && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
              </svg>
            )}
            {toggle && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <circle cx='12' cy='12' r='4'></circle>
                <path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'></path>
              </svg>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

// const Navbar = React.memo(NavbarComponent)

export default Navbar
