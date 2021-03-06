import { useStaticQuery, graphql } from "gatsby"

export const useImageQuery = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      aboutusImage: file(relativePath: { eq: "about-us-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data
}
