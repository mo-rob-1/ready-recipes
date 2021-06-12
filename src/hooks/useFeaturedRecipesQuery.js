import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedRecipesQuery = () => {
  const data = useStaticQuery(graphql`
    query FeaturedRecipesQuery {
      allWpRecipe(limit: 6, sort: { order: DESC, fields: date }) {
        nodes {
          title
          excerpt
          slug
          uri
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
  `)

  return data
}
