import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from "../components/Layout/Layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Recipes</h1>
      {data.allWpRecipe.nodes.map(node => (
        <div key={node.slug}>
          {/* highlight-start */}
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          {/* highlight-end */}
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpRecipe(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
