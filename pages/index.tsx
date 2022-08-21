import type { NextPage } from 'next'
import Head from 'next/head'
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
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>ProjectDesc | Best GitHub README Generator</title>
        <meta
          name='description'
          content='Generating README files for your amazing GitHub projects has never been so easy as with ProjectDesc. A dynamic, easy to use and elegant solution to generating a perfect markdown template within minutes.'
        />
        <meta
          property='og:title'
          content='ProjectDesc | Best GitHub README Generator'
        />
        <meta
          property='og:description'
          content='Generating README files for your amazing GitHub projects has never been so easy as with ProjectDesc. A dynamic, easy to use and elegant solution to generating a perfect markdown template within minutes.'
        />
      </Head>
      <Layout>
        <section className='section'>
          {displaySection(state.activeSection)}
        </section>
        <section>
          <RenderMarkdown />
        </section>
      </Layout>
    </>
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
