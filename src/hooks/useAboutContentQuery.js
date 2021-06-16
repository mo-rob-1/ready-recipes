import { useStaticQuery, graphql } from "gatsby"

export const useAboutContentQuery = () => {
  const data = useStaticQuery(graphql`
    query AboutContentQuery {
      allWpPage(filter: { databaseId: { eq: 15 } }) {
        nodes {
          title
          content
        }
      }
    }
  `)

  return data
}
