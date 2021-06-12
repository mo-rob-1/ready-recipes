import styled from "styled-components"
import Link from "gatsby-link"

export const Img = styled.img`
  width: 100%;
  /* margin-top: 3rem; */
`
export const Section = styled.section`
  display: block;
  background-color: #f5eaea;
`

export const Container = styled.div`
  padding: 4rem 1rem;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`
export const SectionTitle = styled.h1`
  font-weight: lighter;
  margin-bottom: 2rem;
`

export const PostTitle = styled.h2`
  line-height: 1.5;
  font-weight: lighter;
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
