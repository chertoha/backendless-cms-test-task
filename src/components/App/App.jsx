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

// const Table = lazy(() => import("tabs/dummyTable.js"));

const App = () => {
  const [tabs, setTabs] = useState();

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

  const defaultTabRoute = orderedTabs[0].id;

  const routeElements = orderedTabs.map(({ id, path }) => {
    // <Route key={id} path={id} lazy={() => import(path)} />
    console.log(path);
    const Component = lazy(() => import(path));
    // const Component = lazy(() => import("tabs/dummyTable.js"));
    return <Route key={id} path={id} element={<Component />} />;
    // return <Route key={id} path={id} element={<Table />} />;
  });

  console.log(orderedTabs);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routeElements}
        {/* {orderedTabs.map(({ id, title, path }) => (
          <Route key={id} path={id} lazy={() => import(path)} />
        ))} */}
        {/* <Route
          index={true}
          element={<Navigate to={defaultTabRoute} replace={true} />}
        /> */}

        {/* <Route path="dummyTable" lazy={() => import("tabs/dummyTable.js")} /> */}
        {/* <Route path={"dummyTable"} element={<Table />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
