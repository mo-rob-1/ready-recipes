import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

export default function RecipePost({ data }) {
  const post = data.allWpRecipe.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
