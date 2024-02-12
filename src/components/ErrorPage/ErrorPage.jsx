import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorElements from "./ErrorElements";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <ErrorElements></ErrorElements>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
