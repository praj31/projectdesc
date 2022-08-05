import { useContext } from 'react'
import { StateContext } from '../../context'
import { ACTIONS } from '../../reducer/actions'

const sections = [
  { title: 'Header' },
  { title: 'Description' },
  { title: 'People Involved' },
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
              className={`${state.section === title ? 'active' : ''}`}
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHANGE_SECTION,
                  payload: { section: title },
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
