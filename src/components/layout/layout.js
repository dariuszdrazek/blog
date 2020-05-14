import React from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import "../../styles/main.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
