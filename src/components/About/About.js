import React from "react"
import ProfilePic from "../../assets/images/profile-pic.jpg"
import "./About.css"

function About() {
  return (
    <div id="about" className="about-grid section container sub-container">
      <h1 className="about-expander expander">ABOUT ME</h1>

      <div className="prof-pic-container">
        <img src={ProfilePic} alt="" />
      </div>
      <div className="a-content">
        <h5 className="section-headings">JITHESH KUMAR</h5>
        <p>
          Hey, I'm Jithesh ,a Creative developer based in Kochi, Kerala,India
          with a passion for interactive design and development, currently
          working with the awesome people at Baobab Partners In the past, i have
          had to work across multiple roles including Backend development,
          Mobile development and Product design but lately, my interest has
          gotten more to do with interactive design and front-end
          implementation.
        </p>
        <p>
          Also a fan of landscape photography and have tried playing around with
          mobile photography, some of which you can see here . I am available
          for very interesting gigs, or talks about design, hip-hop, photography
          or fooood
        </p>
      </div>
    </div>
  )
}

export default About
