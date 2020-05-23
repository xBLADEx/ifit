import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
const items = ["Exercise", "Nutrition", "Activity", "Sleep"]

const menu = document.querySelector("[data-js-menu]")

function toggleMenu() {
  menu.classList.toggle("is-active")

  // Overlay
  overlay()
}

function overlay() {
  // Create and append.
  const overlay = document.createElement("span")
  overlay.classList.add("navigation__overlay")
  document.querySelector(".navigation").appendChild(overlay)

  // Remove and close menu.
  overlay.addEventListener("click", _ => {
    overlay.remove()
    menu.classList.remove("is-active")
  })
}

const Nav = () => {
  return (
    <nav className="navigation">
      <button
        className="button--reset navigation__menu-trigger"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
        <span className="h-visual-hide">Menu</span>
      </button>
      <ul className="navigation__menu" data-js-menu>
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
