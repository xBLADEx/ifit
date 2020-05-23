import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faPinterest,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const SocialIcons = () => {
  return (
    <ul className="c-social-media">
      <li className="c-social-media__item">
        <a
          href="#"
          className="c-social-media__link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} />
          <span className="h-visual-hide">YouTube</span>
        </a>
      </li>
      <li className="c-social-media__item">
        <a
          href="#"
          className="c-social-media__link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faPinterest} />
          <span className="h-visual-hide">Pinterest</span>
        </a>
      </li>
      <li className="c-social-media__item">
        <a
          href="#"
          className="c-social-media__link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
          <span className="h-visual-hide">Twitter</span>
        </a>
      </li>
      <li className="c-social-media__item">
        <a
          href="#"
          className="c-social-media__link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
          <span className="h-visual-hide">Facebook</span>
        </a>
      </li>
      <li className="c-social-media__item">
        <a
          href="#"
          className="c-social-media__link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span className="h-visual-hide">Instagram</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialIcons
