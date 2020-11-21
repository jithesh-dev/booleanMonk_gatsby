import React from "react"
import "./Featured.css"
// import { Link } from "gatsby"
import ProjectTile from "../ProjectTile/ProjectTile"
import Carousel from "react-elastic-carousel"

import featuredProjects from "../../data/projects"

function Featured() {
  console.log(featuredProjects)
  return (
    <div id="works" className="f-projects-grid ">
      <div className="works-exp-wrapper">
        <h1 className="works-exp expander">WORKS</h1>
      </div>
      <h5 className="section-headings">FEATURED PROJECTS</h5>
      <div className="project-container">
        <Carousel pagination={false} className="div-carousel">
          {featuredProjects.map(project => (
            <ProjectTile
              counter={project.id}
              image={project.image}
              projectTitle={project.title}
              url={project.url}
              description={project.description}
              stack={project.stack}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Featured
