import Header from "components/Header";
import Spinner from "components/Spinner/Spinner";
import SpinnerWrapper from "components/SpinnerWrapper";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense
          fallback={
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default Layout;
