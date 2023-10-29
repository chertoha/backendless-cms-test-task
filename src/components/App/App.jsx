import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/Layout";
import { useGetTabsQuery } from "redux/tabs/tabsApi";
import { sortArrayByObjectProp } from "utils/sortArrayByObjectProp";

const App = () => {
  const { data: tabs } = useGetTabsQuery();

  if (!tabs) return <div>Something went wrong! No tabs</div>;

  const orderedTabs = sortArrayByObjectProp(tabs, "order");
  const defaultTabRoute = orderedTabs[0].id;

  const routes = orderedTabs.map(({ id, path }) => {
    const Component = lazy(() => import(`../../${path}`));
    return <Route key={id} path={id} element={<Component />} />;
  });

  console.log(orderedTabs);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes}
        <Route
          index={true}
          element={<Navigate to={defaultTabRoute} replace={true} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
