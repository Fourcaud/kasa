import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to="/" exact activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/about" exact activeClassName="active">
          A propos
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
