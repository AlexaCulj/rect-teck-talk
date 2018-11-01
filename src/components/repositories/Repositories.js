import React from "react";
import { Link } from "react-router-dom";

const Repositories = ({ repositories }) => {
  console.log("repositories: ", repositories);

  return (
    <div>
      <Link to="/users/">Back to users</Link>
      <h2>Repositories</h2>
    </div>
  );
};

export default Repositories;
