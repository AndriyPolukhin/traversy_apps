import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About BLT GV</h1>
      <p>Here you can learn more about our work process</p>
      <p>
        <Link to="/contact">Reach us to discuss your projects</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
