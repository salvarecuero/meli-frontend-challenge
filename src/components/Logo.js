import React from "react";
import { Link } from "react-router-dom";
import LogoIMG from "../assets/images/Logo_ML.png";

function Logo() {
  return (
    <>
      <Link to="/">
        <img src={LogoIMG} alt="Logo" />
      </Link>
    </>
  );
}

export default Logo;
