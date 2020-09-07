import React, { useState, useRef, useEffect } from "react"
import "../../styles/common.css"
import "./Layout.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Link } from "gatsby"
import { TweenMax } from "gsap"
import ScrollToTop from "../ScrollToTop/ScrollToTop"

function Layout(props) {
  let reveal = useRef(null)

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
        <ScrollToTop showBelow={400} />
      </div>
    </div>
  )
}

export default Layout
