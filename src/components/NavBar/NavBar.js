import { useGetTabsQuery } from "redux/tabs/tabsApi";
import { sortArrayByObjectProp } from "utils/sortArrayByObjectProp";
import { List, ListItem, StyledNavLink } from "./NavBar.styled";

const NavBar = () => {
  const { data: tabs } = useGetTabsQuery();

  const orderedTabs = sortArrayByObjectProp(tabs, "order");

  return (
    <List>
      {orderedTabs.map(({ id, title }) => (
        <ListItem key={id}>
          <StyledNavLink to={id}>{title}</StyledNavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavBar;
