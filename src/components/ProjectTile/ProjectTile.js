import React from "react"

import { Link } from "gatsby"
import "./ProjectTile.css"
function ProjectTile({ counter, image, projectTitle }) {
  return (
    <div className="p-tile">
      <h4 className="p-title">
        <span>{counter}</span>
        {projectTitle}
      </h4>
      <div className="p-img">
        <img src={image} alt="" />
      </div>
      <div className="tile-content">
        <p>
          I design and pilot web projects. I am committed to making innovation
          accessible to all and building an ethical technology.I design and
          pilot web projects. I am committed to making innovation accessible to
          all and building an ethical technology.
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
  )
}

export default ProjectTile
