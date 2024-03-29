import { useRef, useEffect } from 'react'
import TextInputArray from '../reusable/form/TextInputArray'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

const BuiltWithSection = () => {
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
        title='Built With'
        subtitle='The technology stack of your project matters.'
        ref={scrollAnchorRef}
      />
      <SectionElement
        title='Technology and Tools'
        note='Mention the core languages, frameworks and tools used create the project.'
      >
        <TextInputArray
          placeholder='Next Typescript'
          section='builtwith'
          property='stack'
          button_label='Add Tech or Tool'
          placeholder_label='Tech or Tool'
        />
      </SectionElement>
      <SectionNavigation prev='Roles' next='Screenshots' />
    </>
  )
}

export default BuiltWithSection
