import React from "react"
import { useFeaturedRecipesQuery } from "../../hooks/useFeaturedRecipesQuery"
import {
  Section,
  Img,
  Title,
  StyledLink,
  RecipeWrapper,
  RecipeItem,
  RecipeTitle,
  Excerpt,
  ViewRecipe,
} from "./FeaturedRecipes.styles"

const FeaturedRecipes = () => {
  const data = useFeaturedRecipesQuery()

  return (
    <Section>
      <Title>Featured Recipes</Title>
      <RecipeWrapper>
        {data.allWpRecipe.nodes.map(node => {
          return (
            <RecipeItem>
              <StyledLink to={node.uri} key={node.uri}>
                <Img
                  src={node.featuredImage.node.localFile.url}
                  alt={node.title}
                />
                <RecipeTitle>{node.title}</RecipeTitle>
                <Excerpt>{node.recipeExcerpt.excerpt}</Excerpt>
                <ViewRecipe to={node.uri}>View Recipe</ViewRecipe>
              </StyledLink>
            </RecipeItem>
          )
        })}
      </RecipeWrapper>
    </Section>
  )
}

export default FeaturedRecipes
