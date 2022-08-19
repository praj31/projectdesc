import type { NextPage } from 'next'
import React, { useContext } from 'react'
import Layout from '../components/layout'
import RenderMarkdown from '../components/render/Markdown'
import { BuiltWithSection } from '../components/sections/BuiltWith'
import { ContactSection } from '../components/sections/Contact'
import DescriptionSection from '../components/sections/Description'
import HeaderSection from '../components/sections/Header'
import { Roles } from '../components/sections/Roles'
import { ScreenshotsSection } from '../components/sections/Screenshots'
import { StateContext } from '../context'

const Home: NextPage = () => {
  const { state } = useContext(StateContext)

  return (
    <Layout>
      <section className='section'>
        {displaySection(state.activeSection)}
      </section>
      <section>
        <RenderMarkdown />
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
    case 'Roles':
      return <Roles />
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
