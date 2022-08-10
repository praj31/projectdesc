import React from 'react'
import TextInputField from '../reusable/form/TextInputField'
import SectionElement from '../reusable/section/SectionElement'
import SectionNavigation from '../reusable/section/SectionNavigation'
import SectionTitle from '../reusable/section/SectionTitle'

export const HeaderSection = React.memo(() => {
  return (
    <>
      <SectionTitle
        title='Header'
        subtitle="Grab your reader's attention with a flashy header!"
      />
      <SectionElement title='Project Title' note='Be creative with it.'>
        <TextInputField
          placeholder='ProjectDesc'
          action={'handle-header'}
          section={'header'}
          property={'title'}
        />
      </SectionElement>
      <SectionElement
        title='Project Subtitle'
        note='Keep it to one line or upto 60 characters.'
      >
        <TextInputField
          placeholder='Project Readme Generator'
          action={'handle-header'}
          section={'header'}
          property={'subtitle'}
        />
      </SectionElement>
      <SectionElement
        title='Project Logo URL'
        note='You can pass the URL from your GitHub repository.'
      >
        <TextInputField
          placeholder='https://raw.githubusercontent.com/user/repo/branch/folder/image'
          action={'handle-header'}
          section={'header'}
          property={'logoURL'}
        />
      </SectionElement>
      <SectionElement title='Github Username' note='Just the name.'>
        <TextInputField
          placeholder='praj31'
          action={'handle-header'}
          section={'header'}
          property={'githubUser'}
        />
      </SectionElement>
      <SectionElement title='Github Repository Name' note='Just the name.'>
        <TextInputField
          placeholder='projectdesc'
          action={'handle-header'}
          section={'header'}
          property={'githubRepo'}
        />
      </SectionElement>
      <SectionElement
        title='Project Live URL'
        note='Let your work speak for itself.'
      >
        <TextInputField
          placeholder='https://myprojectlivehere.com'
          action={'handle-header'}
          section={'header'}
          property={'liveURL'}
        />
      </SectionElement>
      <SectionNavigation next='Description' />
    </>
  )
})
