import React from "react"
import { useFeaturedPostQuery } from "../../hooks/useFeaturedPostQuery"
import {
  Section,
  Container,
  Excerpt,
  Img,
  SubTitle,
  StyledLink,
} from "./FeaturedPost.styles"

const FeaturedPost = () => {
  const data = useFeaturedPostQuery()
  console.log(data)

  return (
    <Section>
      <Container>
        <SubTitle>Featured Post</SubTitle>
        <h1>{data.allWpPost.edges[0].node.title}</h1>

        <Excerpt
          dangerouslySetInnerHTML={{
            __html: data.allWpPost.edges[0].node.excerpt,
          }}
        />
        <StyledLink to={`/blog${data.allWpPost.edges[0].node.uri}`}>
          Read More
        </StyledLink>
        <Img
          src={data.allWpPost.edges[0].node.featuredImage.node.localFile.url}
        />
      </Container>
    </Section>
  )
}

export default FeaturedPost
