import { useEffect, useRef } from 'react'
import TextInputArray from '../reusable/form/TextInputArray'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

export const ScreenshotsSection = () => {
  const scrollAnchorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAnchorRef && scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    }
  }, [scrollAnchorRef])

  return (
    <>
      <div ref={scrollAnchorRef}></div>
      <SectionTitle
        title='Screenshots'
        subtitle='Give your audience a sneak peek of your UI.'
      />
      <SectionElement
        title='Image URL'
        note='You can get the images URL from your GitHub repository.'
      >
        <TextInputArray
          placeholder='https://raw.githubusercontent.com/user/repo/branch/folder/image'
          section='screenshots'
          property='images'
          button_label='Add Image URL'
          placeholder_label='Image URL'
        />
      </SectionElement>
      <SectionNavigation prev='Built With' next='Contact' />
    </>
  )
}
