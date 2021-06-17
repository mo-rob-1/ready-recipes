import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import {
  Section,
  Img,
  Banner,
  BlogItem,
  BannerTitle,
  BlogTitle,
  Excerpt,
  StyledLink,
  ViewPost,
  Breadcrumb,
  BreadcrumbLink,
  Wrapper,
} from "../styles/Blog.styles"

export default function Home({ data }) {
  return (
    <Layout>
      <Banner>
        <BannerTitle>Blog</BannerTitle>
      </Banner>
      <Section>
        <Breadcrumb>
          <BreadcrumbLink to="/">Home</BreadcrumbLink> / Blog
        </Breadcrumb>
        <Wrapper>
          {data.allWpPost.nodes.map(node => (
            <BlogItem key={node.slug}>
              {/* highlight-start */}
              <StyledLink to={node.slug}>
                <Img src={node.featuredImage.node.localFile.url} />
                <BlogTitle>{node.title}</BlogTitle>
                <p>{node.date}</p>
              </StyledLink>
              {/* highlight-end */}
              <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <ViewPost to={node.slug}>View Post</ViewPost>
            </BlogItem>
          ))}
        </Wrapper>
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
        date(formatString: "DD MMMM, YYYY")
        author {
          node {
            name
          }
        }
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
