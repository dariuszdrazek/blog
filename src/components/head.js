import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: { title },
    },
  } = data || {}

  return <Helmet title={`${pageTitle} | ${title}`} />
}

export default Head
