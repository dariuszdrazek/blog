import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1>About Me</h1>
      <p>Junior React developer working in SM</p>
      <p>
        Conatct site <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default About
