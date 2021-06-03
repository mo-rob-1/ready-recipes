import styled from "styled-components"

export const IconWrapper = styled.div`
  position: fixed;
  display: block;
  z-index: 100000;
  right: 16px;
  top: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`
