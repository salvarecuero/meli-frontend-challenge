import React from "react";
import SearchBar from "./SearchBar";

function Layout(props) {
  return (
    <>
      <SearchBar />
      {props.children}
    </>
  );
}

export default Layout;
