import { Link } from "gatsby"
import React from "react"
const items = ["Exercise", "Nutrition", "Activity", "Sleep"]

const Nav = () => {
  return (
    <ul className="navigation__menu">
      {items.map(link => (
        <li className="navigation__item" key={link}>
          <Link to={link} className="navigation__link">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
