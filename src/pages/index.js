import * as React from "react"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import FeaturedRecipes from "../components/FeaturedRecipes/FeaturedRecipes"
import FeaturedPost from "../components/FeaturedPost/FeaturedPost"
import HomepagePosts from "../components/HomepagePosts/HomepagePosts"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <FeaturedRecipes />
    <FeaturedPost />
    <HomepagePosts />
    <SubscribeSection />
  </Layout>
)

export default IndexPage
