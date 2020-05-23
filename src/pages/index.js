import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Testimonials from "../components/testimonials"
import Courses from "../components/courses"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Testimonials />
    <Courses />
  </Layout>
)

export default IndexPage
