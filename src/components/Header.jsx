import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/header.scss"

const Header = () => {
  return (
    <>
      <nav>
        <h1>TechyStar</h1>
        <main>
          <Link to={"/techystar"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <HashLink to={"/techystar/#about"}>About</HashLink>
          <HashLink to={"/techystar/#brands"}>Brands</HashLink>
          <Link to={"/services"}>Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
