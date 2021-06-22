import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Head from "../components/Head/Head"
import {
  Img,
  Banner,
  BannerTitle,
  Section,
  RecipeTitle,
  Excerpt,
  StyledLink,
  ViewRecipe,
  RecipeItem,
  Breadcrumb,
  BreadcrumbLink,
  Wrapper,
} from "../styles/Recipes.styles"

export default function Home({ data }) {
  return (
    <Layout>
      <Head title="Recipes" />
      <Banner>
        <BannerTitle>Recipes</BannerTitle>
      </Banner>
      <Section>
        <Breadcrumb>
          <BreadcrumbLink to="/">Home</BreadcrumbLink> / Recipes
        </Breadcrumb>
        <Wrapper>
          {data.allWpRecipe.nodes.map(node => (
            <RecipeItem key={node.slug}>
              {/* highlight-start */}
              <StyledLink to={node.slug}>
                <Img src={node.featuredImage.node.localFile.url} />
                <RecipeTitle>{node.title}</RecipeTitle>
              </StyledLink>
              {/* highlight-end */}
              <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <ViewRecipe to={node.slug}>View Recipe</ViewRecipe>
            </RecipeItem>
          ))}
        </Wrapper>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpRecipe(sort: { fields: date }) {
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
