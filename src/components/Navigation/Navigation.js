import React from "react"

import { List, ListItem, StyledLink, NavWrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => {
  return (
    <NavWrapper>
      <List>
        {menu.map(mainItem =>
          !mainItem.parentId ? (
            <ListItem key={mainItem.id}>
              <StyledLink to={mainItem.url} activeClassName="nav-active">
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
              </StyledLink>
              {mainItem.childItems.nodes.length !== 0 ? (
                <ul>
                  {mainItem.childItems.nodes.map(childItem => (
                    <li key={childItem.id}>
                      <StyledLink
                        to={childItem.url}
                        activeClassName="nav-active"
                      >
                        {childItem.label}
                      </StyledLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </ListItem>
          ) : null
        )}
      </List>
    </NavWrapper>
  )
}

export default Navigation
