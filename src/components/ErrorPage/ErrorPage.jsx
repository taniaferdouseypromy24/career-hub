import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      oops
      <Link className="btn" to="/">
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
