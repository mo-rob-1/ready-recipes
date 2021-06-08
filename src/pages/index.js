import * as React from "react"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
