import { useStaticQuery, graphql } from "gatsby"

export const useSubscribeQuery = () => {
  const data = useStaticQuery(graphql`
    query SubscribeQuery {
      allWpPage(filter: { databaseId: { eq: 45 } }) {
        edges {
          node {
            subscribe {
              heading
              description
            }
          }
        }
      }
    }
  `)

  return data
}
