import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Head from "../components/head"

const App = () => {
  return (
    <Layout>
      <Head pageTitle="Home" />
      <h1>Main Page</h1>
      <p>
        Need developor? <a href="/contact">Contact with me</a>
      </p>
      <p>
        Use Link to make URL <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default App
