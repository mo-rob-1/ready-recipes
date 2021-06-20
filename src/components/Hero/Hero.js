import React from "react"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { getImage } from "gatsby-plugin-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import {
  HeroSection,
  StyledImg,
  HeroTextWrapper,
  Wrapper,
  StyledLink,
  HeroDescription,
  HeroTitle,
  HeroTagline,
} from "./Hero.styles"

const Hero = () => {
  const data = useHeroQuery()

  const HeroImageOne = getImage(
    data.allWpPage.edges[0].node.heroImageOne.heroImageOne.localFile
      .childImageSharp.gatsbyImageData
  )

  const HeroImageTwo = getImage(
    data.allWpPage.edges[0].node.heroImageTwo.heroImageTwo.localFile
      .childImageSharp.gatsbyImageData
  )

  const HeroImageThree = getImage(
    data.allWpPage.edges[0].node.heroImageThree.heroImageThree.localFile
      .childImageSharp.gatsbyImageData
  )

  return (
    <HeroSection>
      <Carousel autoPlay swipeable infiniteLoop emulateTouch>
        <Wrapper>
          <StyledImg image={HeroImageOne} alt="Hero Image" />

          <HeroTextWrapper>
            <StyledLink
              to={data.allWpPage.edges[0].node.heroImageOne.heroImageOneLink}
            >
              <HeroTagline>
                {data.allWpPage.edges[0].node.heroImageOne.heroImageOneTagline}
              </HeroTagline>

              <HeroTitle>
                {data.allWpPage.edges[0].node.heroImageOne.heroImageOneTitle}
              </HeroTitle>

              <HeroDescription>
                {
                  data.allWpPage.edges[0].node.heroImageOne
                    .heroImageOneDescription
                }
              </HeroDescription>
            </StyledLink>
          </HeroTextWrapper>
        </Wrapper>

        <Wrapper>
          <StyledImg image={HeroImageTwo} alt="Hero Image" />

          <HeroTextWrapper>
            <StyledLink
              to={data.allWpPage.edges[0].node.heroImageTwo.heroImageTwoUrl}
            >
              <HeroTagline>
                {data.allWpPage.edges[0].node.heroImageTwo.heroImageTwoTagline}
              </HeroTagline>
              <HeroTitle>
                {data.allWpPage.edges[0].node.heroImageTwo.heroImageTwoTitle}
              </HeroTitle>
              <HeroDescription>
                {
                  data.allWpPage.edges[0].node.heroImageTwo
                    .heroImageTwoDescription
                }
              </HeroDescription>
            </StyledLink>
          </HeroTextWrapper>
        </Wrapper>

        <Wrapper>
          <StyledImg image={HeroImageThree} alt="Hero Image" />
          <HeroTextWrapper>
            <StyledLink
              to={
                data.allWpPage.edges[0].node.heroImageThree.heroImageThreeLink
              }
            >
              <HeroTagline>
                {
                  data.allWpPage.edges[0].node.heroImageThree
                    .heroImageThreeTagline
                }
              </HeroTagline>
              <HeroTitle>
                {
                  data.allWpPage.edges[0].node.heroImageThree
                    .heroImageThreeTitle
                }
              </HeroTitle>
              <HeroDescription>
                {
                  data.allWpPage.edges[0].node.heroImageThree
                    .heroImageThreeDescription
                }
              </HeroDescription>
            </StyledLink>
          </HeroTextWrapper>
        </Wrapper>
      </Carousel>
    </HeroSection>
  )
}

export default Hero
