import Layout from "components/Layout";
import TabWrapper from "components/TabWrapper";
import SpinnerWrapper from "components/SpinnerWrapper";
import Spinner from "components/Spinner/Spinner";
import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGetTabsQuery } from "redux/tabs/tabsApi";
import { sortArrayByObjectProp } from "utils/sortArrayByObjectProp";

const App = () => {
  const { data: tabs, isFetching, error } = useGetTabsQuery();

  if (isFetching) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (error) {
    return (
      <TabWrapper>
        <div>Something went wrong! No tabs</div>
      </TabWrapper>
    );
  }

  const orderedTabs = sortArrayByObjectProp(tabs, "order");
  const defaultTabRoute = orderedTabs[0].id;

  const routes = orderedTabs.map(({ id, path }) => {
    const Component = lazy(() => import(`../../${path}`));
    return (
      <Route
        key={id}
        path={id}
        element={
          <TabWrapper>
            <Component />
          </TabWrapper>
        }
      />
    );
  });

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
