import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Testimonials from "../components/testimonials"
import Courses from "../components/courses"
import Equipment from "../components/equipment"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Testimonials />
    <Courses />
    <Equipment />
  </Layout>
)

export default IndexPage
