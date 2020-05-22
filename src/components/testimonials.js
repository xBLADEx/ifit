import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import wired from "../assets/images/logo-wired.png"
import mashable from "../assets/images/logo-mashable.png"
import junkie from "../assets/images/logo-gear-junkie.png"

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: `60px`,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const data = [
    {
      image: junkie,
      desc:
        "You focus on putting in the work, and the technology handles the rest.",
    },
    {
      image: wired,
      desc: "Literally transports you from home to wherever you choose to run.",
    },
    {
      image: junkie,
      desc:
        "You focus on putting in the work, and the technology handles the rest.",
    },
    {
      image: wired,
      desc:
        "You focus on putting in the work, and the technology handles the rest.",
    },
    {
      image: mashable,
      desc: "Breathes new life into a tired, old running routine.",
    },
  ]

  return (
    <>
      <Slider {...settings} className="">
        {data.map((details, i) => (
          <div key={i} className="slick__item">
            <img src={details.image} alt="" className="slick__logo" />"
            {details.desc}"
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Testimonials
