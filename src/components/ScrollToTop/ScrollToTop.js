import React, { useState, useEffect } from "react"
import "./ScrollToTop.css"

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }
  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll, { passive: true })
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <button onClick={handleClick} className={`topBtn ${show && "show"}`}>
      Top
    </button>
  )
}

export default ScrollToTop
