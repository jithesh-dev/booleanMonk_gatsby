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
      <svg width="512" height="512" x="0" y="0" viewBox="0 0 492.004 492.004">
        <g transform="matrix(6.123233995736766e-17,-1,1,6.123233995736766e-17,0.00004577636715907829,492.00401306152344)">
          <path
            d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
            fill="#000000"
            data-original="#000000"
          />
        </g>
      </svg>
    </button>
  )
}

export default ScrollToTop
