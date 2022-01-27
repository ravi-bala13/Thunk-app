import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"} style={{ margin: "10px" }}>
        Register
      </Link>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
}

export default Navbar;
