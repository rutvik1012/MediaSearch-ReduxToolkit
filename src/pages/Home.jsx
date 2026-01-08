import React, { lazy, Suspense } from "react";
import SearchBar from "../components/SearchBar";
const Tabs = lazy(() => import("../components/Tabs"));
const ResultGrid =lazy(()=>import("../components/ResultGrid"));
import { useSelector } from "react-redux";
const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <SearchBar />

      {query !== " " ? (
        <div>
          <Suspense fallback={<div>Loading Tabs...</div>}>
            <Tabs />
          </Suspense>

          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
