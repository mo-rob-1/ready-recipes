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
  console.log(data)
  return (
    <Section>
      <SectionTitle>Latest News</SectionTitle>
      <Container>
        {data.allWpPost.nodes.map(node => {
          return (
            <PostItem>
              <StyledLink to={`/blog${node.uri}`} key={node.uri}>
                {/* <StyledImg
                image={featuredRecipeImage}
                alt="Featured Recipe Image"
                key={node.uri}
              /> */}
                <Img src={node.featuredImage.node.localFile.url} />
                <PostTitle>{node.title}</PostTitle>
                <p>{node.date}</p>
                <Excerpt
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt,
                  }}
                />
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
