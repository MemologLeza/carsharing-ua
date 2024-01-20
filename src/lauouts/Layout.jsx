import Header from "../components/header/Header";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layouts;
