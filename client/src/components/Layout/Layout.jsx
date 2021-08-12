import React from "react";
import Nav from "../Nav/Nav";
const Layout = (props) => {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
