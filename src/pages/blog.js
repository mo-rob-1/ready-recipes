import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import {
  Section,
  Img,
  Banner,
  BannerTitle,
  BlogTitle,
} from "../styles/Blog.styles"

export default function Home({ data }) {
  return (
    <Layout>
      <Banner>
        <BannerTitle>Blog</BannerTitle>
      </Banner>
      <Section>
        {data.allWpPost.nodes.map(node => (
          <div key={node.slug}>
            {/* highlight-start */}
            <Link to={node.slug}>
              <Img src={node.featuredImage.node.localFile.url} />
              <BlogTitle>{node.title}</BlogTitle>
            </Link>
            {/* highlight-end */}
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost {
      nodes {
        title
        excerpt
        slug
        featuredImage {
          node {
            localFile {
              url
            }
          }
        }
      }
    }
  }
`
