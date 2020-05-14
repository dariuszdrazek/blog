import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const {
    contentfulBlogPost: {
      title,
      publishedDate,
      body: { json },
    },
  } = data || {}

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const {
          data: {
            target: { fields },
          },
        } = node
        const alt = fields.title["en-US"]
        const src = fields.file["en-US"].url
        return <img alt={alt} src={src} />
      },
    },
  }
  return (
    <Layout>
      <Head pageTitle={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}

export default Blog
