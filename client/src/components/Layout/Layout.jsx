import React from "react";
import TopNav from "../TopNav/TopNav";
import Nav from "../Nav/Nav";
const Layout = (props) => {
  return (
    <div>
      {/* <Nav client={props.client}/> */}
      <TopNav client={props.client}/>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
