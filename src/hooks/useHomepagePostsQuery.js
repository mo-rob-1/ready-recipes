import { useStaticQuery, graphql } from "gatsby"

export const useHomepagePostsQuery = () => {
  const data = useStaticQuery(graphql`
    query HomepagePostsQuery {
      allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          title
          excerpt
          uri
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
  `)

  return data
}
