import styled from "styled-components"
import Link from "gatsby-link"
import { GatsbyImage } from "gatsby-plugin-image"

export const AboutSection = styled.section`
  color: #000;
  text-align: center;
  padding: 1rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 3rem;
    padding: 1.2rem 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    padding: 6rem 0;
  }
`
export const AboutTitle = styled.h1`
  margin-top: 0;
  line-height: 1.4;
  font-weight: lighter;
  @media (min-width: 1440px) {
    font-size: 2.6rem;
    width: 80%;
  }
`

export const AboutContent = styled.div`
  color: #000;
`

export const AboutDescription = styled.p`
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  text-align: left;
  margin-bottom: 2.6rem;
  @media (min-width: 1440px) {
    width: 80%;
  }
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
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
`
export const AboutImageWrapper = styled.div`
  display: block;
  margin-bottom: 3rem;
`
export const StyledImg = styled(GatsbyImage)`
  width: 100%;
`
