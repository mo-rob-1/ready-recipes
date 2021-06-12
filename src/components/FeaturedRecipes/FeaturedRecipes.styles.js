import styled from "styled-components"
import Link from "gatsby-link"

export const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #f5eaea;
`

export const Img = styled.img`
  width: 100%;
`
export const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: lighter;
`

export const RecipeTitle = styled.h2`
  font-weight: lighter;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

export const RecipeWrapper = styled.div`
  display: block;
`

export const RecipeItem = styled.div`
  margin-bottom: 3rem;
  &:nth-child(6) {
    margin-bottom: 0;
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
