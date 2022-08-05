import type { NextPage } from 'next'
import { useContext } from 'react'
import Layout from '../components/layout'
import { BuiltWithSection } from '../components/sections/BuiltWith'
import { ContactSection } from '../components/sections/Contact'
import { DescriptionSection } from '../components/sections/Description'
import { FeaturesSection } from '../components/sections/Features'
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
  return section === 'Header' ? (
    <HeaderSection />
  ) : section === 'Description' ? (
    <DescriptionSection />
  ) : section === 'People Involved' ? (
    <PeopleInvolvedSection />
  ) : section === 'Built With' ? (
    <BuiltWithSection />
  ) : section === 'Features' ? (
    <FeaturesSection />
  ) : section === 'Screenshots' ? (
    <ScreenshotsSection />
  ) : section === 'Contact' ? (
    <ContactSection />
  ) : null
}

export default Home
