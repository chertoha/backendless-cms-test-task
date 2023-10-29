import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  font-size: 26px;
  color: #000000;

  &.active {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }
`;

export const List = styled("ul")`
  display: flex;
  column-gap: 20px;
`;

export const ListItem = styled("li")``;
