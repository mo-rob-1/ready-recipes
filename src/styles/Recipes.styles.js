import styled from "styled-components"
import img from "../images/recipe-page-banner-image.jpg"
import Link from "gatsby-link"

export const Img = styled.img`
  width: 100%;
`
export const Banner = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  color: #fff;
  text-align: center;
`

export const BannerTitle = styled.h1`
  font-size: 3rem;
`
export const Section = styled.section`
  padding: 2rem 1rem 0rem 1rem;
`

export const RecipeTitle = styled.h2`
  font-weight: lighter;
  color: #000;
  line-height: 1.5;
`
export const Excerpt = styled.p`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
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
export const RecipeItem = styled.div`
  margin-bottom: 3rem;
`
export const BreadcrumbLink = styled(Link)`
  font-family: "Karla", sans-serif;
  color: #000;
`
export const Breadcrumb = styled.h4`
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  margin-bottom: 2rem;
`
