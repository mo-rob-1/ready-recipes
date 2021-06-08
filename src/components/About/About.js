import React from "react"
import { useImageQuery } from "../../hooks/useImageQuery"
import Img from "gatsby-image"
import {
  AboutSection,
  AboutTitle,
  AboutDescription,
  AboutLink,
  AboutTextWrapper,
  AboutImageWrapper,
} from "./About.styles"

const About = () => {
  const data = useImageQuery()
  console.log(data)

  return (
    <AboutSection>
      <AboutTextWrapper>
        <AboutTitle>Home to all our easy to make recipes.</AboutTitle>
        <AboutDescription>
          Aravida cum sociis natoque penatibus et, magnis dis parturient montes
          nascetur ridiculus mus mauris vitae ultricies. Leo integer malesuada
          nunc vel risus commodo, viverra maecenas accumsan lacus vel facilisis
          volutpat est velit egestas dui id ornare. Arcu odio ut sem nulla
          pharetra diam sit amet nisl suscipit adipiscing bibendum est.
        </AboutDescription>
        <AboutLink to="/">Learn more</AboutLink>
      </AboutTextWrapper>
      <AboutImageWrapper>
        <Img
          fluid={data.cookingImage.childImageSharp.fluid}
          alt="Image of food being prepared"
        />
      </AboutImageWrapper>
    </AboutSection>
  )
}

export default About
