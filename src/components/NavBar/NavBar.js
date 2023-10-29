import { useGetTabsQuery } from "redux/tabs/tabsApi";
import { sortArrayByObjectProp } from "utils/sortArrayByObjectProp";
import { List, StyledNavLink } from "./NavBar.styled";

const NavBar = () => {
  const { data: tabs } = useGetTabsQuery();

  if (!tabs) return;

  const orderedTabs = sortArrayByObjectProp(tabs, "order");

  return (
    <List>
      {orderedTabs.map(({ id, title }) => (
        <li key={id}>
          <StyledNavLink to={id}>{title}</StyledNavLink>
        </li>
      ))}
    </List>
  );
};

export default NavBar;
