import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "../components/Head/Head"
import {
  Breadcrumb,
  Content,
  RecipeImg,
  StyledLink,
  RecipeOverviewWrapper,
  ImgWrapper,
  OverviewTextWrapper,
  OverviewTitle,
  RecipeSummary,
  AdditionalInfoWrapper,
  Serves,
  CookingTime,
  CookingTitle,
  CookingTitleWrapper,
  Ingredients,
  Preparation,
  CookingWrapper,
  Container,
  MainContent,
} from "../styles/RecipeTemplate.styles"
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons"

export default function RecipePost({ data }) {
  const post = data.allWpRecipe.nodes[0]

  return (
    <Layout>
      <Head title={post.title} />
      <Container>
        <Breadcrumb>
          <StyledLink to="/">Home</StyledLink> /{" "}
          <StyledLink to="/recipes">Recipes</StyledLink> / {post.title}
        </Breadcrumb>

        <RecipeOverviewWrapper>
          <ImgWrapper>
            <RecipeImg src={post.ingredients.image.localFile.url} />
          </ImgWrapper>

          <OverviewTextWrapper>
            <OverviewTitle>{post.title}</OverviewTitle>
            <RecipeSummary>{post.ingredients.recipeOverview}</RecipeSummary>

            <AdditionalInfoWrapper>
              <CookingTime>
                {" "}
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ fontSize: "1.6rem", marginRight: "12px" }}
                />
                {post.ingredients.cookingTime} minutes
              </CookingTime>
              <Serves>
                {" "}
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: "1.6rem", marginRight: "12px" }}
                />
                Serves: {post.ingredients.serves}
              </Serves>
            </AdditionalInfoWrapper>
          </OverviewTextWrapper>
        </RecipeOverviewWrapper>

        <MainContent>
          <Content dangerouslySetInnerHTML={{ __html: post.content }} />

          <CookingWrapper>
            <CookingTitleWrapper>
              <CookingTitle>Ingredients</CookingTitle>
            </CookingTitleWrapper>
            <Ingredients
              dangerouslySetInnerHTML={{ __html: post.ingredients.ingredients }}
            />
          </CookingWrapper>

          <CookingWrapper>
            <CookingTitleWrapper>
              <CookingTitle>Preparation</CookingTitle>
            </CookingTitleWrapper>
            <Preparation
              dangerouslySetInnerHTML={{ __html: post.ingredients.preparation }}
            />
          </CookingWrapper>
        </MainContent>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpRecipe(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        ingredients {
          recipeOverview
          ingredients
          preparation
          image {
            localFile {
              url
            }
          }
          cookingTime
          serves
        }
      }
    }
  }
`
