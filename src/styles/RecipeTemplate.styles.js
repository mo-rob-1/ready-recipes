import styled from "styled-components"
import Link from "gatsby-link"

export const Container = styled.main`
  color: #000;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding: 4rem 4rem;
    padding-top: 1rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    padding: 0;
    padding-bottom: 4rem;
  }
`
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
  @media (min-width: 768px) {
    padding: 0;
  }
`
export const MainContent = styled.div`
  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 700px;
  }
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
  /* margin-top: 2rem; */
  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
    margin-bottom: 2rem;
  }
`
export const RecipeImg = styled.img`
  width: 100%;
`
export const RecipeOverviewWrapper = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 6rem;
    gap: 4rem;
  }
  @media (min-width: 1440px) {
    gap: 6rem;
  }
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
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    font-size: 3.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 4.5rem;
  }
`
export const RecipeSummary = styled.p`
  font-family: "Karla", sans-serif;
  line-height: 1.6;
  font-size: 1.2rem;
`
export const AdditionalInfoWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`
export const CookingTime = styled.p`
  display: block;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 0;
    margin-right: 3rem;
    font-size: 1.1rem;
  }
`
export const Serves = styled.p`
  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1.1rem;
  }
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
  @media (min-width: 768px) {
    padding-left: 0;
  }
`
