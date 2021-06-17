import styled from "styled-components"
import Link from "gatsby-link"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`
export const Name = styled.h1`
  font-family: "Baskervville", serif;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`
export const HeaderWrapper = styled.header`
  display: block;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    padding: 1.2rem 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    padding-left: 0;
    padding-right: 0;
  }
`
