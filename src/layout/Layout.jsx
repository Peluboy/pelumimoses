import React, { useEffect, useState } from "react";
import Routers from "../routers/Routers";
import PageLoader from "../components/PageLoader/PageLoader";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Routers />
        </>
      )}
    </>
  );
};

export default Layout;
