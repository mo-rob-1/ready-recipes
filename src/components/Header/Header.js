import React from "react"

import Navigation from "../Navigation/Navigation"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { StyledLink, Name, HeaderWrapper } from "./Header.styles"

const Header = () => {
  const { site, menu } = useMenuQuery()

  return (
    <HeaderWrapper>
      <Name>
        <StyledLink to="/">{site.siteMetadata.title}</StyledLink>
      </Name>
      <Navigation menu={menu.menuItems.nodes} />
    </HeaderWrapper>
  )
}

export default Header
