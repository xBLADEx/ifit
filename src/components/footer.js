import React from "react"
import SocialIcons from "./socialIcons"

const Footer = () => {
  return (
    <footer className="g-footer">
      <div className="g-row g-footer__top">
        <div className="g-footer__column">
          <h2 className="g-footer__heading">Company</h2>
          <ul className="g-footer__links">
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                About
              </a>
            </li>
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                Contact Us
              </a>
            </li>
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="g-footer__column">
          <h2 className="g-footer__heading">Account</h2>
          <ul className="g-footer__links">
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                Log In
              </a>
            </li>
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                Create Account
              </a>
            </li>
          </ul>
        </div>
        <div className="g-footer__column">
          <h2 className="g-footer__heading">Support</h2>
          <ul className="g-footer__links">
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                Help Center
              </a>
            </li>
            <li className="g-footer__links-item">
              <a href="#" className="g-footer__link">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="g-footer__social-container">
        <SocialIcons />
      </div>

      <div className="g-footer__bottom">
        <ul>
          <li>&copy; iFit.com. All Right Reserved.</li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
