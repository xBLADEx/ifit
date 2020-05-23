import React from "react"
import iconTime from "../assets/images/icon-time.png"
import iconDistance from "../assets/images/icon-distance.png"
import iconPlaylist from "../assets/images/icon-playlist.png"

const Course = props => {
  return (
    <li
      className={`course ${
        props.details.shadow === false ? "course--no-shadow" : null
      }`}
    >
      <div className="course__image-container">
        <img src={props.details.image} alt="" className="course__image" />
      </div>
      <div className="course__details-container">
        <div className="course__details">
          <p className="course__name">{props.details.name}</p>
          <ul className="course__stats">
            {props.details.time ? (
              <li className="course__stats-item">
                <img src={iconTime} alt="" className="course__stats-icon" />
                {props.details.time}
              </li>
            ) : null}
            {props.details.miles ? (
              <li className="course__stats-item">
                <img src={iconDistance} alt="" className="course__stats-icon" />
                {props.details.miles} M
              </li>
            ) : null}
          </ul>
          {props.details.view_more ? (
            <a href="#" className="course__view-more">
              View Details
            </a>
          ) : null}
        </div>
        <img
          src={props.details.instructor_icon}
          alt=""
          className="course__instructor"
        />
      </div>
    </li>
  )
}

export default Course
