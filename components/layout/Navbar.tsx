import React from 'react'
import SidebarToggle from '../toggles/SidebarToggle'
import ThemeToggle from '../toggles/ThemeToggle'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className='navbar'>
      <div className='sidebar-brand'>
        <SidebarToggle />
        <div className='site-name'>
          Project<span>Desc</span>
        </div>
      </div>
      <div className='links'>
        <nav className='nav-links'>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
