import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello from BLT GV.</h1>
      <h2>
        This is our process website. Here you can learn in details how we work.{" "}
      </h2>
      <p>
        Please contact us <Link to="/contact">here.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
