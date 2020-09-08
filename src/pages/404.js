import React from "react"
import monster from "../assets/images/404_monster.svg"
import Layout from "../components/Layout/Layout"
import "./404.css"
const NotFound = () => {
  return (
    <Layout>
      <div className="monsterContainer">
        <img src={monster} alt="" />
      </div>
      {/* <p>
        <Link to="/">Head home</Link>
      </p> */}
    </Layout>
  )
}

export default NotFound
