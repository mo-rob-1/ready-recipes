import { useStaticQuery, graphql } from "gatsby"

export const useIntroQuery = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      allWpPage(filter: { databaseId: { eq: 45 } }) {
        edges {
          node {
            introduction {
              introTitle
              introDescription
              introLink
              introImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
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
