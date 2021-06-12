import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedPostQuery = () => {
  const data = useStaticQuery(graphql`
    query FeaturedPostQuery {
      allWpPost(limit: 1, sort: { fields: date, order: DESC }) {
        edges {
          node {
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
    }
  `)

  return data
}
