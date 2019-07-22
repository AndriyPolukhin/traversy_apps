import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
const AboutPage = () => {
  return (
    <>
      <Layout>
        <h1>About me</h1>
        <p>
          All about me and my contacts are <Link to="/contact">here</Link>
        </p>
      </Layout>
    </>
  )
}

export default AboutPage
