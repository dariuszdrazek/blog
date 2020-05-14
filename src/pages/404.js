import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="NotFound" />
      <h1>Page not Found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
