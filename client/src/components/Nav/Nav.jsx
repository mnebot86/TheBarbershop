import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import "./Nav.css";

const Nav = (props) => {
  const [open, setOpen] = useState(false);

  const unauthenticated = (
    <>
      <Link to="/signup">Sign Up</Link>

      <Link to="/login">Login</Link>
    </>
  );

  const authenticated = (
    <>
      <Link to="/confirmation">Confirmation</Link>

      <Link to="/signout">Sign Out</Link>

      <li className="user-name">{props.client?.name}</li>
    </>
  );
  const handleToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

 
  return (
    <div>
      <nav className="navBar navBar2">
        <button id='hamburger' onClick={handleToggle}>{open ? (<MdClose style={{ color: 
        '#fff', width: "4rem", height: "4rem"}}/>
  ) : (
    <FiMenu style={{color: "#7b7b7b", width: "4rem", height: "4rem"}} />
  )}
  </button>
        <ul id="menuNav2" className={`menuNav ${open ? "showMenu" : ""}`}>
          <li>
            <Link
              to="/home"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Services
            </Link>
          </li>
          <li>{props.client ? authenticated : unauthenticated}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
