import { useRef, useEffect } from 'react'
import TextInputArray from '../reusable/form/TextInputArray'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

const RolesSection = () => {
  const scrollAnchorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAnchorRef && scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'end',
      })
    }
  }, [scrollAnchorRef])

  return (
    <>
      <SectionTitle
        title='Roles'
        subtitle='Is it a solo or group project?'
        ref={scrollAnchorRef}
      />
      <SectionElement title='People' note='Mention the name and the role.'>
        <TextInputArray
          placeholder='Pratikraj Rajput - Full Stack Engineer'
          section='roles'
          property='people'
          button_label='Add Person'
          placeholder_label='Person - Role'
        />
      </SectionElement>
      <SectionNavigation prev='Description' next='Built With' />
    </>
  )
}

export default RolesSection
