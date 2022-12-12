import useStoreAction from '../../../store/actions'

type Props = {
  prev?: string
  next?: string
}

const SectionNavigation = (props: Props) => {
  const changeActiveSection = useStoreAction.changeActiveSection
  return (
    <div className='section-nav'>
      {props.prev && (
        <button
          className='prev'
          onClick={() => changeActiveSection(props.prev!)}
        >
          ← Previous Section
        </button>
      )}
      {props.next && (
        <button
          className='next'
          onClick={() => changeActiveSection(props.next!)}
        >
          Next Section →
        </button>
      )}
    </div>
  )
}

export default SectionNavigation
