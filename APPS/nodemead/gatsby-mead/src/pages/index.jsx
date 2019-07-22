import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello.</h1>
        <h2>I'm Andriy a fullstack developer living in Kiev</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
