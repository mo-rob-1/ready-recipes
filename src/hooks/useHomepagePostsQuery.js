import { useStaticQuery, graphql } from "gatsby"

export const useHomepagePostsQuery = () => {
  const data = useStaticQuery(graphql`
    query HomepagePostsQuery {
      allWpPost(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          title
          excerpt
          blogpostExcerpt {
            excerpt
          }
          uri
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
  `)

  return data
}
