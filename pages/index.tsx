import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import RenderForm from '../components/layout/RenderForm'
import Sidebar from '../components/layout/Sidebar'
import RenderMarkdown from '../components/layout/RenderMarkdown'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>ProjectDesc | Best GitHub Project README Generator</title>
        <meta
          name='description'
          content='Generating README files for your amazing GitHub projects has never been so easy as with ProjectDesc. A dynamic, easy to use and elegant solution to generating a perfect markdown template within minutes.'
        />
        <meta
          property='og:title'
          content='ProjectDesc | Best GitHub Project README Generator'
        />
        <meta
          property='og:description'
          content='Generating README files for your amazing GitHub projects has never been so easy as with ProjectDesc. A dynamic, easy to use and elegant solution to generating a perfect markdown template within minutes.'
        />
      </Head>
      <div className='container'>
        <Navbar />
        <Sidebar />
        <main className='page'>
          <div className='theme-default-content content__default'>
            <RenderForm />
            <RenderMarkdown />
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
