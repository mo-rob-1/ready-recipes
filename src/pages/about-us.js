import React from "react"
import Layout from "../components/Layout/Layout"
import { useImageQuery } from "../hooks/useImageQuery"
import { useAboutContentQuery } from "../hooks/useAboutContentQuery"
import Head from "../components/Head/Head"
import Img from "gatsby-image"
import {
  IntroWrapper,
  IntroImgWrapper,
  IntroTextWrapper,
  IntroTitle,
  IntroDesc,
  AboutContent,
  Section,
} from "../styles/About.styles"

const About = () => {
  const data = useImageQuery()

  const aboutContent = useAboutContentQuery()

  return (
    <Layout>
      <Head title="About us" />
      <Section>
        <IntroWrapper>
          <IntroImgWrapper>
            <Img
              fluid={data.aboutusImage.childImageSharp.fluid}
              alt="About Image"
            />
          </IntroImgWrapper>
          <IntroTextWrapper>
            <IntroTitle>Welcome to Ready Recipes!</IntroTitle>
            <IntroDesc>
              If you want to improve your cooking skills but don’t know where to
              start, we’ve got plenty of dishes to choose from. Our collection
              includes a variety of different recipes both savory and sweet. For
              example, our mouth-watering lemon yogurt cake, classic lentil
              soup, and flavorsome buttery tomato pasta, which are all ideal for
              beginners.
            </IntroDesc>
          </IntroTextWrapper>
        </IntroWrapper>
      </Section>
      <AboutContent
        dangerouslySetInnerHTML={{
          __html: aboutContent.allWpPage.nodes[0].content,
        }}
      />
    </Layout>
  )
}

export default About
