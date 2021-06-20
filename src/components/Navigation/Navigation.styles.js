import styled from "styled-components"
import Link from "gatsby-link"

export const StyledLink = styled(Link)`
  font-family: "Karla", sans-serif;
  text-decoration: none;
  color: #000;
  font-weight: bold;
`
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ListItem = styled.li`
  padding: 0;
  margin: 0;
  list-style-type: none;
  margin-right: 1.2rem;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  &:nth-child(4) {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    margin: 0;
    margin-right: 1.8rem;
  }
  @media (min-width: 1024px) {
    margin-right: 2rem;
  }
`
export const NavWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
