import { useRef, useEffect } from 'react'
import TextInputField from '../reusable/form/TextInputField'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

export const ContactSection = () => {
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
        title='Contact'
        subtitle='Let your audience know how to reach you.'
        ref={scrollAnchorRef}
      />
      <SectionElement title='Email' note='Your mail ID.'>
        <TextInputField
          placeholder='rajputpraj.31@gmail.com'
          section='contact'
          property='email'
        />
      </SectionElement>
      <SectionElement title='Twitter' note='Just the username.'>
        <TextInputField
          placeholder='prajx31'
          section='contact'
          property='twitter'
        />
      </SectionElement>
      <SectionElement title='Instagram' note='Just the username.'>
        <TextInputField
          placeholder='prajx31'
          section='contact'
          property='instagram'
        />
      </SectionElement>
      <SectionElement title='LinkedIn' note='Just the username.'>
        <TextInputField
          placeholder='rajputpraj'
          section='contact'
          property='linkedin'
        />
      </SectionElement>
      <SectionNavigation prev='Screenshots' />
    </>
  )
}
