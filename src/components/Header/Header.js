import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/svg/bm-logo.svg"

import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <img className="logo" src={Logo} alt="" />
        <nav className="nav">
          <Link to="#about" className="nav__link">
            about
          </Link>
          <Link to="#works" className="nav__link">
            works
          </Link>
          <Link to="#contact" className="nav__link">
            contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
