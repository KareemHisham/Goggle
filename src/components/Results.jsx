import React, { useEffect } from "react";
import { useStateContext } from "../context/APIContext";
import { Links, MiniResu } from "./CompWrapper";
import { useLocation } from "react-router-dom";
const Results = () => {
  const { FetchResults, searchTerm, error } = useStateContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm) {
      FetchResults(`${location.pathname}/q=${searchTerm}&num=30`);
    }
  }, [searchTerm, location.pathname]);

  return (
    <section className="results py-3">
      <div className="container">
        <Links />
        {error.show && (
          <div className="alert alert-danger text-center">{error.msg}</div>
        )}
        <MiniResu />
      </div>
    </section>
  );
};

export default Results;
