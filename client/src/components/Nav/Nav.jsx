import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/confirmation">Confirmation</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="signout">Sign Out</Link>
    </div>
  );
};

export default Nav;