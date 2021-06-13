import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import {
  TitleBanner,
  Breadcrumb,
  Title,
  Excerpt,
  StyledLink,
} from "../styles/PostTemplate.styles"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <TitleBanner>
          <Title>{post.title}</Title>
          <p>{post.date}</p>
          <p>By {post.author.node.name}</p>
        </TitleBanner>
        <Breadcrumb>
          <StyledLink to="/">Home</StyledLink> /{" "}
          <StyledLink to="/blog">Blog</StyledLink> / {post.title}
        </Breadcrumb>
        <Excerpt dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "DD MMMM, YYYY")
        author {
          node {
            name
          }
        }
      }
    }
  }
`
