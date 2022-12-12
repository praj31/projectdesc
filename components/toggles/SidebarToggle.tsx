import React, { useEffect } from 'react'
import { useStore } from '../../store'
import useStoreAction from '../../store/actions'

const SidebarToggle = () => {
  const toggleSidebar = useStoreAction.toggleSidebar
  const sidebarOpen = useStore((state) => state.sidebarOpen)

  useEffect(() => {
    if (sidebarOpen) {
      document.querySelector('.sidebar')?.classList.add('sidebar-open')
      document.querySelector('.theme-default-content')?.classList.add('pad-l')
    } else {
      document.querySelector('.sidebar')?.classList.remove('sidebar-open')
      document
        .querySelector('.theme-default-content')
        ?.classList.remove('pad-l')
    }
  }, [sidebarOpen])

  return (
    <div
      className='sidebar-button'
      role={'button'}
      onClick={() => toggleSidebar(!sidebarOpen)}
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
  )
}

export default React.memo(SidebarToggle)
