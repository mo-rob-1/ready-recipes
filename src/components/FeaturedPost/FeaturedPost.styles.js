import styled from "styled-components"
import Link from "gatsby-link"

export const Section = styled.section`
  display: block;
`

export const Container = styled.div`
  padding: 5rem 1rem;
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
