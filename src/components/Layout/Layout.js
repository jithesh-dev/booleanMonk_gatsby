import React, { useState } from "react"
import "../../styles/common.css"
import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link } from "gatsby"

function Layout(props) {
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  window.addEventListener("scroll", checkScrollTop)
  return (
    <div className="layout container">
      <div id="top"></div>
      <Header />
      {props.children}
      <Footer />

      <Link to="#top" className={`topBtn ${showScroll && "show"}`}>
        Top
      </Link>
    </div>
  )
}

export default Layout
