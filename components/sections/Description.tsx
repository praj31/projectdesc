import React, { useEffect, useRef } from 'react'
import { ACTIONS } from '../../reducer/actions'
import TextAreaField from '../reusable/form/TextAreaField'
import TextInputArray from '../reusable/form/TextInputArray'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

const DescriptionSection = () => {
  const scrollAnchorRef = useRef<HTMLDivElement>(null)
  const action: ACTIONS = 'handle-section-ipf'
  const section = 'description'

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
        title='Description'
        subtitle="Let's dig into the juicy details of your project."
      />
      <SectionElement
        title='Project Objective'
        note='Two or three lines description of what is your project about and what problems does it solve?'
      >
        <TextAreaField
          placeholder="Writing a good README file that summarizes enough information for the readers to unambiguously understand is must thing to have on your GitHub repository. ProjectDesc helps achieve precisely that within minutes. Don't worry about writing your own markdown file anymore!"
          action={action}
          section={section}
          property='objective'
        />
      </SectionElement>
      <SectionElement
        title='Project Scope'
        note='Two or three lines description of whose problems your project solves, i.e., the target audience?'
      >
        <TextAreaField
          placeholder='ProjectDesc is useful resource to the developers community who need to quickly summarize important parts of their project in their README file which goes on the GitHub repository.'
          action={action}
          section={section}
          property='scope'
        />
      </SectionElement>
      <SectionElement
        title='Project Challenge'
        note='Two or three lines description of any major challenging aspect of your project?'
      >
        <TextAreaField
          placeholder='Having a well designed UI which is easy to navigate while also being fast to reflect the live changes as the user types was a major design and development goal of the project.'
          action={action}
          section={section}
          property='challenge'
        />
      </SectionElement>
      <SectionElement
        title='Project Features'
        note='The main features of your project. You can include software architecture, design goals met, functional requirements, etc.'
      >
        <TextInputArray
          placeholder='Your feature here'
          section={section}
          property='features'
          button_label='Add Feature'
          placeholder_label='Feature'
        />
      </SectionElement>
      <SectionNavigation prev='Header' next='Roles' />
    </>
  )
}

export default React.memo(DescriptionSection)
