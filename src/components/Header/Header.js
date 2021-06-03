import React from "react"
import { Link } from "gatsby"

import Navigation from "../Navigation/Navigation"
import { useMenuQuery } from "../../hooks/useMenuQuery"

const Header = () => {
  const { site, menu } = useMenuQuery()

  return (
    <div>
      <Link to="/">
        <h1>{site.siteMetadata.title}</h1>
      </Link>
      <Navigation menu={menu.menuItems.nodes} />
    </div>
  )
}

export default Header
