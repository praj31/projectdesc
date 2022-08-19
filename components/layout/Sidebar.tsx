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
      </aside>
    </>
  )
}

export default Sidebar
