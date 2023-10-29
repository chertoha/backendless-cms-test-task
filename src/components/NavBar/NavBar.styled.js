import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  color: #000000;

  &.active {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }
`;

export const List = styled("ul")`
  padding: 30px 0;
  display: flex;
  column-gap: 20px;

  border-bottom: 1px solid grey;
`;

export const ListItem = styled("li")``;
