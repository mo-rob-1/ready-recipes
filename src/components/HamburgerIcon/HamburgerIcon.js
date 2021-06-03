import React, { useState } from "react"
import Hamburger from "hamburger-react"
import { IconWrapper } from "./HamburgerIcon.styles"

const HamburgerIcon = ({ handleViewMenu }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div onClick={handleViewMenu}>
      <IconWrapper>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </IconWrapper>
    </div>
  )
}

export default HamburgerIcon
