import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { author },
    },
  } = data || {}

  return (
    <footer className={footerStyles.footer}>
      <p>Copyright {author} All reverse &copy; 2020 </p>
    </footer>
  )
}

export default Footer
