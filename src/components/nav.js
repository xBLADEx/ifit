import { Link } from "gatsby"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
const items = ["Exercise", "Nutrition", "Activity", "Sleep"]

const Nav = () => {
  const [nav, setNav] = useState(false)

  function toggleMenu() {
    setNav(true)

    // Overlay
    overlay()
  }

  // This isn't the React way, I know.
  function overlay() {
    const menu = document.querySelector("[data-js-menu]")
    // Create and append.
    const overlay = document.createElement("span")
    overlay.classList.add("navigation__overlay")
    document.querySelector(".navigation").appendChild(overlay)

    // Remove and close menu.
    overlay.addEventListener("click", _ => {
      overlay.remove()
      menu.classList.remove("is-active")
      setNav(false)
    })
  }

  return (
    <nav className="navigation">
      <button
        className="button--reset navigation__menu-trigger"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
        <span className="h-visual-hide">Menu</span>
      </button>
      <ul
        className={`navigation__menu ${nav ? "is-active" : null}`}
        data-js-menu
      >
        {items.map(link => (
          <li className="navigation__item" key={link}>
            <Link to={link} className="navigation__link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
