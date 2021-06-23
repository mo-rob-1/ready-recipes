import React from "react"
import { useFeaturedPostQuery } from "../../hooks/useFeaturedPostQuery"
import {
  Section,
  Container,
  Title,
  Excerpt,
  Img,
  SubTitle,
  StyledLink,
  TextWrapper,
} from "./FeaturedPost.styles"

const FeaturedPost = () => {
  const data = useFeaturedPostQuery()

  return (
    <Section>
      <Container>
        <TextWrapper>
          <SubTitle>Featured Post</SubTitle>
          <Title>{data.allWpPost.edges[0].node.title}</Title>

          <Excerpt>
            {data.allWpPost.edges[0].node.blogpostExcerpt.excerpt}
          </Excerpt>
          <div>
            <StyledLink to={`/blog${data.allWpPost.edges[0].node.uri}`}>
              Read More
            </StyledLink>
          </div>
        </TextWrapper>
        <Img
          src={data.allWpPost.edges[0].node.featuredImage.node.localFile.url}
        />
      </Container>
    </Section>
  )
}

export default FeaturedPost
