import styled from "styled-components"
import Link from "gatsby-link"

export const Img = styled.img`
  width: 100%;
`
export const Section = styled.section`
  padding: 5rem 1rem;
  background-color: #f5eaea;
  @media (min-width: 768px) {
    padding: 4rem;
  }
  @media (min-width: 1440px) {
    padding: 6rem 4rem;
    padding-bottom: 5rem;
  }
`
export const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 2rem;
    margin-top: 4rem;
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`
export const SectionTitle = styled.h1`
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    text-align: center;
  }
  @media (min-width: 1440px) {
    margin-bottom: 4.5rem;
    font-size: 2.4rem;
  }
`
export const PostTitle = styled.h2`
  line-height: 1.5;
  font-weight: bold;
`
export const Excerpt = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 2rem;
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
export const PostItem = styled.div`
  margin-bottom: 3rem;
`
