import React from "react"
import { useIntroQuery } from "../../hooks/useIntroQuery"
import { getImage } from "gatsby-plugin-image"
import {
  AboutSection,
  AboutTitle,
  AboutDescription,
  AboutLink,
  AboutTextWrapper,
  AboutImageWrapper,
  StyledImg,
} from "./About.styles"

const About = () => {
  const data = useIntroQuery()
  console.log(data)

  const introImage = getImage(
    data.allWpPage.edges[0].node.introduction.introImage.localFile
      .childImageSharp.gatsbyImageData
  )

  return (
    <AboutSection>
      <AboutTextWrapper>
        <AboutTitle>
          {data.allWpPage.edges[0].node.introduction.introTitle}
        </AboutTitle>
        <AboutDescription>
          {data.allWpPage.edges[0].node.introduction.introDescription}
        </AboutDescription>
        <div>
          <AboutLink to={data.allWpPage.edges[0].node.introduction.introLink}>
            Learn more
          </AboutLink>
        </div>
      </AboutTextWrapper>
      <AboutImageWrapper>
        <StyledImg image={introImage} alt="Intro Image" />
      </AboutImageWrapper>
    </AboutSection>
  )
}

export default About
