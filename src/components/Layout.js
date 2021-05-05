import React from "react";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <SearchBar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
