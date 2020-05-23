import React from "react"
import courseImage from "../assets/images/course.png"
import courseInstructor from "../assets/images/course-instructor.png"

import Course from "./course"

const courses_data = [
  {
    image: courseImage,
    name: "Lake Inniscarra, Ireland—Pyramid",
    instructor_icon: courseInstructor,
    time: "30:53",
    miles: "6,248",
    view_more: true,
    workouts: null,
    shadow: false,
  },
  {
    image: courseImage,
    name: "Performance Series",
    instructor_icon: courseInstructor,
    time: "",
    miles: "",
    view_more: false,
    workouts: 9,
  },
  {
    image: courseImage,
    name: "Slow Pulls and Fast Intervals",
    instructor_icon: courseInstructor,
    time: "44:13",
    miles: "9,948",
    view_more: false,
    workouts: null,
  },
  {
    image: courseImage,
    name: "20 Minutes to Toned",
    instructor_icon: courseInstructor,
    time: "",
    miles: "",
    view_more: false,
    workouts: 12,
  },
  {
    image: courseImage,
    name: "Charles Race, Boston, Massachusetts",
    instructor_icon: courseInstructor,
    time: "36:22",
    miles: "8,648",
    view_more: false,
    workouts: null,
    shadow: false,
  },
  {
    image: courseImage,
    name: "Full-Body HIIT Series",
    instructor_icon: courseInstructor,
    time: "",
    miles: "",
    view_more: false,
    workouts: 12,
  },
  {
    image: courseImage,
    name: "Kafue River, Zambia—Power Stroke Pyramid",
    instructor_icon: courseInstructor,
    time: "22:22",
    miles: "4,660",
    view_more: false,
    workouts: null,
  },
  {
    image: courseImage,
    name: "Shred & Burn Series",
    instructor_icon: courseInstructor,
    time: "",
    miles: "",
    view_more: false,
    workouts: 16,
  },
]

const Courses = () => {
  return (
    <>
      <ul className="g-row courses">
        {courses_data.map((course, index) => (
          <Course key={index} details={course} />
        ))}
      </ul>
    </>
  )
}

export default Courses
