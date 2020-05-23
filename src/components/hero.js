import React from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

const Hero = () => {
  return (
    <div className="hero">
      <VisibilitySensor once>
        {({ isVisible }) => (
          <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <h1 style={{ opacity }}>
                The best personal training, right in your own home
              </h1>
            )}
          </Spring>
        )}
      </VisibilitySensor>
      <a href="/" className="button button--large">
        Join iFit Coach
      </a>
    </div>
  )
}

export default Hero
