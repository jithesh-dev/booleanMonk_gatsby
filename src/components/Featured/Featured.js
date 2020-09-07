import React from "react"
// import ArteMockup from "../../assets/images/arte-mockup.png"
import "./Featured.css"
// import { Link } from "gatsby"
import ProjectTile from "../ProjectTile/ProjectTile"
import Carousel from "react-elastic-carousel"
import ArteMockup from "../../assets/images/featured/arte-mockup.png"
import BooleanMockup from "../../assets/images/featured/boolean_monk_mobile.png"
import sockitupMockup from "../../assets/images/featured/Sockit-up_mockup_web.jpg"
import amazonMockup from "../../assets/images/featured/amazone_clone.jpg"

function Featured() {
  return (
    <div id="works" className="f-projects-grid ">
      <div className="works-exp-wrapper">
        <h1 className="works-exp expander">WORKS</h1>
      </div>
      <h5 className="section-headings">FEATURED PROJECTS</h5>
      <div className="project-container">
        <Carousel pagination={false} className="div-carousel">
          <ProjectTile
            counter="01"
            image={ArteMockup}
            projectTitle="Arte Musica"
          />
          <ProjectTile
            counter="02"
            image={BooleanMockup}
            projectTitle="Boolean Monk"
          />
          <ProjectTile
            counter="03"
            image={sockitupMockup}
            projectTitle="Sock It Up"
          />
          <ProjectTile
            counter="04"
            image={amazonMockup}
            projectTitle="Amazon Clone"
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Featured
