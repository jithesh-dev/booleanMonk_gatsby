import React from "react"
import ArteMockup from "../../assets/images/arte-mockup.png"
import "./Featured.css"
import { Link } from "gatsby"

function Featured() {
  return (
    <div id="works" className="f-projects-grid ">
      <div className="works-exp-wrapper">
        <h1 className="works-exp expander">WORKS</h1>
      </div>
      <h5 className="section-headings">FEATURED PROJECTS</h5>
      <div className="project-container">
        <div className="p-tile">
          <h4 className="p-title">
            <span>01</span>ARTE MUSICA
          </h4>
          <img className="p-img" src={ArteMockup} alt="" />
          <div className="tile-content">
            <p>
              I design and pilot web projects. I am committed to making
              innovation accessible to all and building an ethical technology.I
              design and pilot web projects. I am committed to making innovation
              accessible to all and building an ethical technology.
            </p>
            <ul className="highlight">
              <li>UI / UX DESIGN</li>
              <li>FRONT END DEVELOPMENT</li>
              <li>WORDPRESS THEME CONVERSION</li>
            </ul>

            <Link to="#" className="btn">
              VIEW PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
