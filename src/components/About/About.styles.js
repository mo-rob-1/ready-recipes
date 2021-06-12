import styled from "styled-components"
import Link from "gatsby-link"
import { GatsbyImage } from "gatsby-plugin-image"

export const AboutSection = styled.section`
  text-align: center;
  padding: 1rem;
`
export const AboutTitle = styled.h1`
  margin-top: 0;
  line-height: 1.4;
  font-weight: lighter;
`
export const AboutDescription = styled.p`
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 2.6rem;
`

export const AboutLink = styled(Link)`
  font-family: "Karla", sans-serif;
  text-decoration: none;
  border: solid 1px #000;
  padding: 0.8rem 3rem;
  border-radius: 2rem;
  color: #000;
`

export const AboutTextWrapper = styled.div`
  margin-bottom: 3.2rem;
`
export const AboutImageWrapper = styled.div`
  display: block;
  margin-bottom: 3rem;
`
export const StyledImg = styled(GatsbyImage)`
  width: 100%;
`
