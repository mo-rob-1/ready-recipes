import React from "react"
import { useHomepagePostsQuery } from "../../hooks/useHomepagePostsQuery"
import {
  Section,
  Container,
  Img,
  StyledLink,
  SectionTitle,
  PostItem,
  PostTitle,
  Excerpt,
  ViewPost,
} from "./HomepagePosts.styles"

const HomepagePosts = () => {
  const data = useHomepagePostsQuery()

  return (
    <Section>
      <SectionTitle>Latest News</SectionTitle>
      <Container>
        {data.allWpPost.nodes.map(node => {
          return (
            <PostItem>
              <StyledLink to={`/blog${node.uri}`} key={node.uri}>
                <Img src={node.featuredImage.node.localFile.url} />
                <PostTitle>{node.title}</PostTitle>
                <p>{node.date}</p>
                <Excerpt>{node.blogpostExcerpt.excerpt}</Excerpt>
                <ViewPost to={`/blog${node.uri}`}>View Post</ViewPost>
              </StyledLink>
            </PostItem>
          )
        })}
      </Container>
    </Section>
  )
}

export default HomepagePosts
