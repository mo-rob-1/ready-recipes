import React, { useState } from "react"
import { GlobalStyles, Container } from "./Layout.styles"
import Header from "../Header/Header"
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleViewMenu = () => setMenuOpen(prev => !prev)

  return (
    <>
      <GlobalStyles />
      {/* <HamburgerIcon handleViewMenu={handleViewMenu} /> */}
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
