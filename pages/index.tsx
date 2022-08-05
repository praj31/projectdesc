import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Layout from '../components/layout'
import { BuiltWithSection } from '../components/sections/BuiltWith'
import { ContactSection } from '../components/sections/Contact'
import { DescriptionSection } from '../components/sections/Description'
import { HeaderSection } from '../components/sections/Header'
import { PeopleInvolvedSection } from '../components/sections/PeopleInvolved'
import { ScreenshotsSection } from '../components/sections/Screenshots'
import { StateContext } from '../context'

const Home: NextPage = () => {
  const { state } = useContext(StateContext)
  return (
    <Layout>
      <section>{displaySection(state.section)}</section>
      <section>
        <h1 className='section-h1'>Part 2</h1>
      </section>
    </Layout>
  )
}

const displaySection = (section: string) => {
  switch (section) {
    case 'Header':
      return <HeaderSection />
    case 'Description':
      return <DescriptionSection />
    case 'People Involved':
      return <PeopleInvolvedSection />
    case 'Built With':
      return <BuiltWithSection />
    case 'Screenshots':
      return <ScreenshotsSection />
    case 'Contact':
      return <ContactSection />
    default:
      return null
  }
}

export default Home
