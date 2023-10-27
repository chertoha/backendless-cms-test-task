import { lazy } from "react";
import {
  Routes,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "components/Layout";
// import DummyTable from "tabs/dummyTable.js";

// const DUMMYTABLE = lazy(() => import("tabs/dummyTable.js"));

const App = () => {
  const [tabs, setTabs] = useState();
  // const [routes, setRoutes] = useState();

  useEffect(() => {
    fetch(
      "http://localhost:3000/backendless-cms-test-task/.well-known/tabs.json"
    )
      .then((data) => {
        // const res = JSON.parse(data);
        return data.json();
      })
      .then((data) => {
        setTabs(data);
      });
  }, []);

  if (!tabs) return <div>Something went wrong! No tabs</div>;

  const orderedTabs = tabs.sort(
    (prevTab, nextTab) => prevTab.order - nextTab.order
  );

  const routeElements = orderedTabs.map(({ id, path }) => {
    const Component = lazy(() => import(`../../${path}`));
    return <Route key={id} path={id} element={<Component />} />;
  });

  const defaultTabRoute = orderedTabs[0].id;

  console.log(orderedTabs);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routeElements}
        <Route
          index={true}
          element={<Navigate to={defaultTabRoute} replace={true} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
