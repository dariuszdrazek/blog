import React from "react"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1>Contact</h1>
      <p>Links to social media</p>
      <p>
        <a
          href="https://www.facebook.com/dariusz.drazek.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fb
        </a>
      </p>
    </Layout>
  )
}

export default Contact
