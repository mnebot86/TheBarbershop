import React from "react";
import Nav from "../Nav/Nav";
const Layout = (props) => {
  return (
    <div>
      <Nav client={props.client}/>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
