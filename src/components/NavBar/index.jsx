import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "../../styles/components/_navbar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <ul className="nav-bar__left">
        <li className="nav-bar__left__brand">My application</li>
        <li className="nav-bar__left__menu">
          <Link to={"/city/list"}>City</Link>
        </li>
        <li className="nav-bar__left__menu">
          <Link to={"/user/list"}>User</Link>
        </li>
      </ul>
      <ul className="nav-bar__right">
        <li className="nav-bar__right__menu" id="highlight">
          Home
        </li>
        <li className="nav-bar__right__menu">About</li>
        <li className="nav-bar__right__menu">Contact</li>
        <li className="nav-bar__right__menu">Login</li>
      </ul>
    </div>
  );
};

export default NavBar;
