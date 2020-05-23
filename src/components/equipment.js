import React from "react"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import treadmills from "../assets/images/equipment-treadmills.png"
import bikes from "../assets/images/equipment-bikes.png"
import ellipticals from "../assets/images/equipment-ellipticals.png"
import strength from "../assets/images/equipment-strength.png"

const Equipment = () => {
  return (
    <>
      <div className="g-row equipment">
        <h2 className="equipment__heading">
          Interested in our exciting iFit-enabled equipment?
        </h2>

        <ul className="equipment__types">
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={500} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <li style={{ opacity }}>
                    <img src={treadmills} alt="" />
                    <p>Treadmills</p>
                  </li>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={1000} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <li style={{ opacity }}>
                    <img src={bikes} alt="" />
                    <p>Bikes</p>
                  </li>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={1500} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <li style={{ opacity }}>
                    <img src={ellipticals} alt="" />
                    <p>Ellipticals</p>
                  </li>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={2000} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <li style={{ opacity }}>
                    <img src={strength} alt="" />
                    <p>Strength</p>
                  </li>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </ul>
      </div>
    </>
  )
}

export default Equipment
