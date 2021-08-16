import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import "./Nav.css";

const Nav = (props) => {
  const [open, setOpen] = useState(false);
  const [topNav, setTopNav] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setTopNav(true);
        setHamburger(false);
      } else {
        // setVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const unauthenticated = (
    <>
      <Link className="nav-link" to="/signup">
        Sign Up
      </Link>

      <Link className="nav-link" to="/login">
        Login
      </Link>
    </>
  );

  const authenticated = (
    <>
      <Link className="nav-link" to="/confirmation">
        Confirmation
      </Link>

      <Link className="nav-link" to="/signout">
        Sign Out
      </Link>

      <li className="nav-user-name">{props.client?.name}</li>
    </>
  );
  const handleToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
        {open ? (
          <MdClose style={{ color: "#fff", width: "4rem", height: "4rem" }} />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "4rem", height: "4rem" }} />
        )}
      </button>
      <ul className={`menuNav ${open ? "showMenu" : ""}`}>
        <li>
          <Link
            to="/home"
            className="nav-link"
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
            className="nav-link"
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
  );
};

export default Nav;
