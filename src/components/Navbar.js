import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1>
          The<span>Cocktail</span>DB
        </h1>
      </Link>

      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
