import React from "react"
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
          <li>
            <img src={treadmills} alt="" />
            <p>Treadmills</p>
          </li>
          <li>
            <img src={bikes} alt="" />
            <p>Bikes</p>
          </li>
          <li>
            <img src={ellipticals} alt="" />
            <p>Ellipticals</p>
          </li>
          <li>
            <img src={strength} alt="" />
            <p>Strength</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Equipment
