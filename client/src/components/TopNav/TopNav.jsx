import "./TopNav.css";
import { Link } from "react-router-dom";

import React from "react";

const TopNav = (props) => {
  const unauthenticated = (
    <>
      <Link className="top-links" to="/signup">
        Sign Up
      </Link>

      <Link className="top-links" to="/login">
        Login
      </Link>
    </>
  );

  const authenticated = (
    <>
      <Link className="top-links" to="/signout">
        Sign Out
      </Link>

      <Link>{props.client?.name}</Link>
    </>
  );

  return (
    <nav className="topNav">
      <p className="navTitle">TheBarberShop</p>
      <ul className="navList">
        <li>
          {" "}
          <Link to="/home" className="top-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="top-links">
            Services
          </Link>
        </li>
        <li>{props.client ? authenticated : unauthenticated}</li>
      </ul>
    </nav>
  );
};

export default TopNav;
