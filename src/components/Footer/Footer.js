import React from "react"
import { Wrapper, Text, StyledLink } from "./Footer.styles"

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        © 2021 | Ready Recipes - Website built by{" "}
        <StyledLink to="https://mocodes.co.uk/">Mo.</StyledLink> using{" "}
        <StyledLink to="https://www.gatsbyjs.com/">GatsbyJS{"  "}</StyledLink>
        and <StyledLink to="https://wordpress.org/">WordPress</StyledLink>
      </Text>
    </Wrapper>
  )
}

export default Footer
