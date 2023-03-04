import React from "react"
import ProfilePic from "../../assets/images/profile-pic.webp"
import "./About.css"

function About() {
  return (
    <div id="about" className="about-grid section container sub-container">
      <h1 className="about-expander expander">ABOUT US</h1>

      <div className="prof-pic-container">
        <img src={ProfilePic} alt="" />
      </div>
      <div className="a-content">
        <h5 className="section-headings">
          We unleash your digital awesomeness
        </h5>
        <p>
          At Digital Web Consulting, we're a squad of digital ninjas who live
          and breathe all things digital. We don't just build websites or run
          campaigns, we craft digital experiences that make your audience go
          "wow". We believe that every brand has a unique digital awesomeness
          waiting to be unleashed, and we're here to make that happen.
        </p>
        <p>
          Our team of experts are not your typical boring consultants. We're
          creative, witty, and a little bit quirky. We're not afraid to push
          boundaries and take risks to make your brand stand out. We're not just
          a team, we're a digital family, and we're committed to making your
          digital dreams come true.
        </p>
      </div>
    </div>
  )
}

export default About
