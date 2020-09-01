import React from "react"
import "../../styles/common.css"
import Header from "../Header/Header"
function Layout(props) {
  return (
    <div className="layout container">
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
