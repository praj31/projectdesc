import React from 'react'
import { useContext } from 'react'
import { StateContext } from '../../context'

const sections = [
  { title: 'Header' },
  { title: 'Description' },
  { title: 'Roles' },
  { title: 'Built With' },
  { title: 'Screenshots' },
  { title: 'Contact' },
]

const Sidebar: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(StateContext)
  return (
    <>
      <div className='sidebar-mask'></div>
      <aside className='sidebar'>
        <ul className='sidebar-links'>
          {sections.map(({ title }, idx) => (
            <li
              key={idx}
              className={`${state.activeSection === title ? 'active' : ''}`}
              onClick={() =>
                dispatch({
                  type: 'change-section',
                  payload: title,
                })
              }
            >
              {title}
            </li>
          ))}
        </ul>
        <div className='sidebar-other-links'>
          <p>For Developers</p>
          <a
            href='https://github.com/praj31/projectdesc'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Source Code
          </a>
          <a
            href='https://github.com/praj31/projectdesc/issues'
            target='_blank'
            rel='noopener noreferrer'
          >
            Report a bug
          </a>
          <a
            href='https://github.com/praj31/projectdesc/issues'
            target='_blank'
            rel='noopener noreferrer'
          >
            Request a feature
          </a>
          <a
            href='mailto:rajputpraj.31@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Me
          </a>
          <p style={{ marginTop: '1rem' }}>
            &copy; {new Date().getFullYear()} Pratikraj Rajput
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
