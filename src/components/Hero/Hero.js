import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import Monk from "../../assets/svg/monk.svg"
import "./Hero.css"
import { TimelineLite } from "gsap"

function Hero() {
  let content = useRef(null)
  let tl = new TimelineLite()

  // useEffect(() => {
  //   tl.from(content.children[0], {
  //     delay: 0.5,
  //     duration: 1.5,
  //     height: 0,
  //     opacity: 0,
  //     ease: "expo.inOut",
  //   })
  // }, [content, tl])

  return (
    <>
      <div className="hero-grid">
        <div className="monk-illustration">
          <img src={Monk} alt="" className="monk " />
        </div>
        <div
          ref={item => {
            content = item
          }}
          className="hero-content"
        >
          <h1 className="hero-title">Be At Peace</h1>

          <h3 className="sub-title animate__animated animate__bounceInLeft">
            YOU HAVE FOUND YOUR NEW WEB PARTNER!
          </h3>
          <Link to="#contact" className="h-cta btn ">
            Get in Touch
          </Link>
        </div>
        <div className="intro-text-wrapper">
          <p className="intro-text highlight">
            Get a Free Consultation (because who doesn't love free stuff?)
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
