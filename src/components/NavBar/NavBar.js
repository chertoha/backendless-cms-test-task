import { NavLink } from "react-router-dom";
import { useGetTabsQuery } from "redux/tabs/tabsApi";
import { sortArrayByObjectProp } from "utils/sortArrayByObjectProp";

const NavBar = () => {
  const { data: tabs } = useGetTabsQuery();

  if (!tabs) return;

  const orderedTabs = sortArrayByObjectProp(tabs, "order");

  return (
    <ul>
      {orderedTabs.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={id}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
