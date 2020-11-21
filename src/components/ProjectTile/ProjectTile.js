import React from "react"

import "./ProjectTile.css"
function ProjectTile({
  counter,
  image,
  projectTitle,
  url,
  description,
  stack,
}) {
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
        <p>{description}</p>
        <ul className="highlight">
          {stack?.map(element => (
            <li>{element}</li>
          ))}
        </ul>

        {url && (
          <a target="_blank" rel="noreferrer" className="btn" href={url}>
            VIEW LIVE PROJECT
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectTile
