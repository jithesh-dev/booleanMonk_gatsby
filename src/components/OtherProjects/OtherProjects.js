import React from "react"
import "./OtherProjects.css"
import otherworks_00 from "../../assets/images/other_works/otherworks_00.webp"
import otherworks_01 from "../../assets/images/other_works/otherworks_01.webp"
import otherworks_02 from "../../assets/images/other_works/otherworks_02.webp"
import otherworks_03 from "../../assets/images/featured/amazone_clone.webp"
import otherworks_04 from "../../assets/images/other_works/otherworks_04.webp"
// import otherworks_05 from "../../assets/images/other_works/otherworks_05.png"
// import otherworks_06 from "../../assets/images/other_works/otherworks_06.png"
// import otherworks_07 from "../../assets/images/other_works/otherworks_07.png"
// import otherworks_08 from "../../assets/images/other_works/otherworks_08.png"
// import otherworks_09 from "../../assets/images/other_works/otherworks_09.png"
import { SRLWrapper } from "simple-react-lightbox"

function OtherProjects() {
  const options = {
    buttons: {
      showDownloadButton: false,
      showAutoplayButton: false,
    },
  }
  return (
    <div className="o-projects-grid section container">
      <h5 className="section-headings">OTHER PROJECTS</h5>
      <SRLWrapper options={options}>
        <div className="project-container">
          <img src={otherworks_00} alt="" className="op-tile" />

          <img src={otherworks_01} alt="" className="op-tile" />

          <img src={otherworks_02} alt="" className="op-tile" />

          <img src={otherworks_03} alt="" className="op-tile" />

          <img src={otherworks_04} alt="" className="op-tile" />
        </div>
      </SRLWrapper>
    </div>
  )
}

export default OtherProjects
