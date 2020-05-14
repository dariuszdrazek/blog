import React from "react"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const { allContentfulBlogPost } = data || {}
  const { edges } = allContentfulBlogPost || []

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <ol className={blogStyles.posts}>
        {edges.map(item => {
          const { title, publishedDate, slug } = item.node || {}
          return (
            <li className={blogStyles.post} key={title}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
