import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Details</h1>
      <p>
        You can contact us at{" "}
        <a href="https://twitter.com/AndriyPolukhin" target="_blank">
          @bltgv
        </a>
      </p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default ContactPage
