import React from "react"
import Layout from "../components/Layout/Layout"
import { useImageQuery } from "../hooks/useImageQuery"
import { useAboutContentQuery } from "../hooks/useAboutContentQuery"
import Img from "gatsby-image"
import {
  IntroWrapper,
  IntroImgWrapper,
  IntroTextWrapper,
  IntroTitle,
  IntroDesc,
  AboutContent,
} from "../styles/About.styles"

const About = () => {
  const data = useImageQuery()
  console.log(data)

  const aboutContent = useAboutContentQuery()
  console.log(aboutContent)

  return (
    <Layout>
      <IntroWrapper>
        <IntroImgWrapper>
          <Img fluid={data.aboutusImage.childImageSharp.fluid} />
        </IntroImgWrapper>
        <IntroTextWrapper>
          <IntroTitle>Welcome to Ready Recipes!</IntroTitle>
          <IntroDesc>
            Aiam quis enim lobortis scelerisque fermentum dui faucibus in ornare
            quam viverra orci sagittis eu volutpat odio facilisis mauris sit
            amet massa vitae tortor condimentum lacinia quis vel eros donec ac
            odio tempor orci dapibus ultrices.
          </IntroDesc>
        </IntroTextWrapper>
      </IntroWrapper>
      <AboutContent
        dangerouslySetInnerHTML={{
          __html: aboutContent.allWpPage.nodes[0].content,
        }}
      />
    </Layout>
  )
}

export default About
