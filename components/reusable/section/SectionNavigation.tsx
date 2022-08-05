import { useContext } from 'react'
import { StateContext } from '../../../context'
import { ACTIONS } from '../../../reducer/actions'

type Props = {
  prev?: string
  next?: string
}

const SectionNavigation = (props: Props) => {
  const { dispatch } = useContext(StateContext)

  const callDispatch = (val: string) => {
    dispatch({ type: ACTIONS.CHANGE_SECTION, payload: { section: val } })
  }

  return (
    <div className='section-nav'>
      {props.prev && (
        <button className='prev' onClick={() => callDispatch(props.prev!)}>
          ← Previous Section
        </button>
      )}
      {props.next && (
        <button className='next' onClick={() => callDispatch(props.next!)}>
          Next Section →
        </button>
      )}
    </div>
  )
}
export default SectionNavigation
