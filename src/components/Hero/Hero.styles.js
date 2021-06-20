import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Link from "gatsby-link"

export const HeroSection = styled.section`
  padding: 0;
`
export const StyledImg = styled(GatsbyImage)`
  width: 100%;
  height: 600px;
  filter: brightness(60%);
`
export const Wrapper = styled.div`
  position: relative;
`
export const HeroTextWrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #fff;
`
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`
export const HeroDescription = styled.p`
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.4;
  font-family: "Karla", sans-serif;
`
export const HeroTitle = styled.h1`
  line-height: 1.4;
  font-size: 2.6rem;
`
export const HeroTagline = styled.h5`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`
