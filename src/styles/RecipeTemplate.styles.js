import styled from "styled-components"
import Link from "gatsby-link"

export const TitleBanner = styled.div`
  background-color: #f5eaea;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  text-align: center;
  line-height: 1.5;
`
export const Content = styled.div`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  padding: 0rem 1rem;
`
export const Ingredients = styled.div`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  padding: 0rem 1rem;
  margin-top: 1rem;
`
export const Preparation = styled.div`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  padding: 0rem 1rem;
`
export const StyledLink = styled(Link)`
  font-family: "Karla", sans-serif;
  color: #000;
`
export const Breadcrumb = styled.h4`
  font-family: "Karla", sans-serif;
  padding: 1rem;
  margin-bottom: 0;
  line-height: 1.5;
  margin-top: 2rem;
`
export const RecipeImg = styled.img`
  width: 100%;
`
export const RecipeOverviewWrapper = styled.div`
  padding: 1rem;
`
export const ImgWrapper = styled.div`
  display: block;
`
export const OverviewTextWrapper = styled.div`
  display: block;
`
export const OverviewTitle = styled.h1`
  font-weight: lighter;
  font-size: 3rem;
  line-height: 1.3;
`
export const RecipeSummary = styled.p`
  font-family: "Karla", sans-serif;
  line-height: 1.6;
  font-size: 1.2rem;
`
export const AdditionalInfoWrapper = styled.div`
  display: block;
`
export const CookingTime = styled.p`
  display: block;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
`
export const Serves = styled.p`
  display: block;
`
export const CookingWrapper = styled.div`
  display: block;
`
export const CookingTitle = styled.h5`
  padding: 0.6rem;
  font-family: "Karla", sans-serif;
  border: solid 1px #000;
  display: inline-block;
`
export const CookingTitleWrapper = styled.div`
  padding-left: 1rem;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.8rem;
`
