import { Link } from "react-router-dom";

const Nav = (props) => {

  const unauthenticated = (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
  
  const authenticated = (
    <div>
      <Link to="/confirmation">Confirmation</Link>
      <Link to="/signout">Sign Out</Link>
      <p>{props.client?.name}</p>
    </div>
  );
  
  return (
    <div>
      <nav>
        <h1>TheBarberShop</h1>
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
        {props.client ? authenticated : unauthenticated}
      </nav>
      

    </div>
  );
};

export default Nav;
