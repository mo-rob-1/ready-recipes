import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allWpPage(filter: { databaseId: { eq: 45 } }) {
        edges {
          node {
            heroImageOne {
              heroImageOneLink
              heroImageOneTitle
              heroImageOneTagline
              heroImageOneDescription
              heroImageOne {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            heroImageTwo {
              heroImageTwoUrl
              heroImageTwoTitle
              heroImageTwoTagline
              heroImageTwoDescription
              heroImageTwo {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            heroImageThree {
              heroImageThreeLink
              heroImageThreeTitle
              heroImageThreeTagline
              heroImageThreeDescription
              heroImageThree {
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
