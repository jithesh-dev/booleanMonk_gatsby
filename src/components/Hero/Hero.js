import React from "react"
import { Link } from "gatsby"
import Monk from "../../assets/svg/monk.svg"
import "./Hero.css"

function Hero() {
  return (
    <>
      <div className="hero-grid">
        <div className="monk-illustration">
          <img src={Monk} alt="" className="monk " />
        </div>
        <div className="hero-content">
          <h1 className="hero-title ">Be At Peace</h1>
          <h3 className="sub-title animate__animated animate__bounceInLeft">
            YOU HAVE FOUND YOUR NEW DESIGNER!
          </h3>
          <Link href="#" className="h-cta btn ">
            Get in Touch
          </Link>
        </div>
        <div className="intro-text-wrapper">
          <p className="intro-text highlight">
            I design and pilot web projects. I am committed to making innovation
            accessible to all and building an ethical technology.
          </p>
        </div>
        <span className="scroll-text">SCROLL</span>
      </div>
      <div className="hello-container">
        <h1 className="hello-exp expander vertical uppercase">hello</h1>
      </div>
    </>
  )
}

export default Hero
