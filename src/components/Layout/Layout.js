import React, { useState, useRef, useEffect } from "react"
import "../../styles/common.css"
import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link } from "gatsby"
import { TweenMax } from "gsap"

function Layout(props) {
  let reveal = useRef(null)
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  window.addEventListener("scroll", checkScrollTop)

  useEffect(() => {
    TweenMax.to(reveal, { duration: 1.5, height: 0, ease: "expo.inOut" })
  }, [reveal])

  return (
    <div className="layout">
      <div
        className="reveal"
        ref={item => {
          reveal = item
        }}
      ></div>
      <div className="container">
        <div id="top"></div>
        <Header />
        {props.children}
        <Footer />

        <Link to="#top" className={`topBtn ${showScroll && "show"}`}>
          Top
        </Link>
      </div>
    </div>
  )
}

export default Layout
