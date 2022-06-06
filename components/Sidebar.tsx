import { useContext } from 'react'
import { StateContext } from '../context'
import { ACTIONS } from '../reducer'

const sections = [
  { title: 'Header' },
  { title: 'Description' },
  { title: 'People Involved' },
  { title: 'Needs & Requirements' },
  { title: 'Built With' },
  { title: 'Features' },
  { title: 'Screenshots' },
  { title: 'Best Practices' },
  { title: 'Contact' },
]

const Sidebar: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(StateContext)
  console.log(state)
  return (
    <>
      <div className='sidebar-mask'></div>
      <aside className='sidebar'>
        <ul className='sidebar-links'>
          {sections.map(({ title, value }, idx) => (
            <li
              key={idx}
              className={`${state.section === title ? 'active' : ''}`}
              onClick={() =>
                dispatch({
                  type: ACTIONS.CHANGE_SECTION,
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
