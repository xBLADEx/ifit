import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../assets/images/logo.inline.svg"
import HeaderTop from "./headerTop"
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header className="g-header">
    <HeaderTop />
    <div className="g-header__main">
      <Link to="/">
        <Logo />
      </Link>

      <Nav />

      <a href="/" className="button g-header__button">
        Sign Up
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
