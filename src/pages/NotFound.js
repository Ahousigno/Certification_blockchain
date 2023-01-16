import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/logo";
import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <div>
      <Countries />
      <Logo />
      <Navigation />
      <h1> Erreur 404</h1>
    </div>
  );
};

export default NotFound;
