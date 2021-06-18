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
export const Excerpt = styled.div`
  line-height: 1.6;
  font-family: "Karla", sans-serif;
  /* font-size: 0.9rem; */
  margin-bottom: 2rem;
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
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
`
export const ContentWrapper = styled.div`
  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`
export const MainWrapper = styled.div`
  min-height: 100vh;
`
