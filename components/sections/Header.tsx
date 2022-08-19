import React, { useEffect, useRef } from 'react'
import { ACTIONS } from '../../reducer/actions'
import TextInputField from '../reusable/form/TextInputField'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

const HeaderSection = () => {
  const scrollAnchorRef = useRef<HTMLDivElement>(null)
  const action: ACTIONS = 'handle-section-ipf'
  const section = 'header'

  useEffect(() => {
    if (scrollAnchorRef && scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      })
    }
  }, [scrollAnchorRef])

  // console.log('+++++ Header +++++')

  return (
    <>
      <div ref={scrollAnchorRef}></div>
      <SectionTitle
        title='Header'
        subtitle="Grab your reader's attention with a flashy header!"
      />
      <SectionElement title='Project Title' note='Be creative with it.'>
        <TextInputField
          placeholder='ProjectDesc'
          action={action}
          section={section}
          property={'title'}
        />
      </SectionElement>
      <SectionElement
        title='Project Subtitle'
        note='Keep it to one line or upto 60 characters.'
      >
        <TextInputField
          placeholder='Project Readme Generator'
          action={action}
          section={section}
          property={'subtitle'}
        />
      </SectionElement>
      <SectionElement
        title='Project Logo URL'
        note='You can pass the URL from your GitHub repository.'
      >
        <TextInputField
          placeholder='https://raw.githubusercontent.com/user/repo/branch/folder/image'
          action={action}
          section={section}
          property={'logoURL'}
        />
      </SectionElement>
      <SectionElement title='Github Username' note='Just the name.'>
        <TextInputField
          placeholder='praj31'
          action={action}
          section={section}
          property={'githubUser'}
        />
      </SectionElement>
      <SectionElement title='Github Repository Name' note='Just the name.'>
        <TextInputField
          placeholder='projectdesc'
          action={action}
          section={section}
          property={'githubRepo'}
        />
      </SectionElement>
      <SectionElement
        title='Project Live URL'
        note='Let your work speak for itself.'
      >
        <TextInputField
          placeholder='https://myprojectlivehere.com'
          action={action}
          section={section}
          property={'liveURL'}
        />
      </SectionElement>
      <SectionNavigation next='Description' />
    </>
  )
}

export default React.memo(HeaderSection)
