import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import {
  TitleBanner,
  Breadcrumb,
  Title,
  Excerpt,
  StyledLink,
} from "../styles/RecipeTemplate.styles"

export default function RecipePost({ data }) {
  const post = data.allWpRecipe.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <TitleBanner>
          <Title>{post.title}</Title>
        </TitleBanner>
        <Breadcrumb>
          <StyledLink to="/">Home</StyledLink> /{" "}
          <StyledLink to="/recipes">Recipes</StyledLink> / {post.title}
        </Breadcrumb>
        <Excerpt dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpRecipe(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`
