import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>

      <NavLink exact to="/a-propos" activeClassName="nav-active">
        A propos
      </NavLink>

      <NavLink exact to="/certification" activeClassName="nav-active">
        Certification
      </NavLink>

      <NavLink exact to="/connexion" activeClassName="nav-active">
        connexion
      </NavLink>
    </div>
  );
};

export default Navigation;
