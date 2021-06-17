import styled from "styled-components"
import Link from "gatsby-link"

export const Section = styled.section`
  display: block;
`

export const Container = styled.div`
  padding: 5rem 1rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 3rem;
    padding: 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    padding: 6rem 0;
  }
`

export const Img = styled.img`
  width: 100%;
  margin-top: 3rem;
`

export const SubTitle = styled.h5`
  font-family: "Karla", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 0;
  font-weight: lighter;
`

export const Excerpt = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media (min-width: 1440px) {
    width: 80%;
    font-size: 1rem;
  }
`

export const StyledLink = styled(Link)`
  font-family: "Karla", sans-serif;
  text-decoration: none;
  border: solid 1px #000;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border-radius: 2rem;
  color: #000;
`
export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }
`
