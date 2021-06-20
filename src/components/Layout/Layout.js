import React from "react"
import { GlobalStyles, Container } from "./Layout.styles"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
