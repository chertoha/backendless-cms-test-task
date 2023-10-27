import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "components/Layout";
import { useGetTabsQuery } from "redux/tabs/tabsApi";
import { sortArrayByObjectProp } from "utils/sortArrayByObjectProp";

const App = () => {
  // const [tabs, setTabs] = useState();
  // const [routes, setRoutes] = useState();

  const { data: tabs } = useGetTabsQuery();

  // useEffect(() => {
  //   fetch(
  //     "http://localhost:3000/backendless-cms-test-task/.well-known/tabs.json"
  //   )
  //     .then((data) => {
  //       // const res = JSON.parse(data);
  //       return data.json();
  //     })
  //     .then((data) => {
  //       setTabs(data);
  //     });
  // }, []);

  if (!tabs) return <div>Something went wrong! No tabs</div>;

  // const orderedTabs = [...tabs].sort(
  //   (prevTab, nextTab) => prevTab.order - nextTab.order
  // );

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
