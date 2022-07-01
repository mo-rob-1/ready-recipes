import styled from "styled-components"
import img from "../images/blog-page-banner-image.jpg"
import Link from "gatsby-link"

export const Section = styled.section`
  padding: 2rem 1rem 0rem 1rem;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding: 3rem 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
    padding-right: 0;
    padding-left: 0;
  }
`
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
export const BlogTitle = styled.h2`
  font-weight: bold;
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
export const ViewPost = styled(Link)`
  font-family: "Karla", sans-serif;
  text-decoration: none;
  border: solid 1px #000;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border-radius: 2rem;
  color: #000;
`
export const BlogItem = styled.div`
  margin-bottom: 3rem;
  color: #000;
`
export const BreadcrumbLink = styled(Link)`
  font-family: "Karla", sans-serif;
  color: #000;
`
export const Breadcrumb = styled.h4`
  color: "#000";
  font-family: "Karla", sans-serif;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`
export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 2.6rem;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`
