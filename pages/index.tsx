import type { NextPage } from 'next'
import { useContext } from 'react'
import Layout from '../components/Layout'
import { StateContext } from '../context'

const Home: NextPage = () => {
  const { state } = useContext(StateContext)
  return (
    <Layout>
      <h3>{state.section}</h3>
    </Layout>
  )
}

export default Home
