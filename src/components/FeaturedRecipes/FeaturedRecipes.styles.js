import styled from "styled-components"
import Link from "gatsby-link"

export const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #f5eaea;
  @media (min-width: 768px) {
    padding: 4rem 4rem;
    padding-bottom: 0;
  }
  @media (min-width: 1440px) {
    padding: 6rem 4rem;
    padding-bottom: 3rem;
  }
`

export const Img = styled.img`
  width: 100%;
`
export const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: lighter;
  @media (min-width: 1440px) {
    margin-bottom: 4.5rem;
    font-size: 2.4rem;
  }
`

export const RecipeTitle = styled.h2`
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

export const RecipeWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`

export const RecipeItem = styled.div`
  margin-bottom: 3rem;
  &:nth-child(6) {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`
export const Excerpt = styled.p`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`
export const ViewRecipe = styled(Link)`
  font-family: "Karla", sans-serif;
  text-decoration: none;
  border: solid 1px #000;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border-radius: 2rem;
  color: #000;
`
