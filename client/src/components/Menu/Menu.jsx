import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
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

      <p>{props.client?.name}</p>
    </>
  );
  return (
    <div>
      <h1 className>TheBarberShop</h1>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>{props.client ? authenticated : unauthenticated}</li>
    </div>
  );
};

export default Menu;