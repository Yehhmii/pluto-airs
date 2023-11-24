// import React from 'react'
import { useState } from "react";
import "./Nav.css";
import logo from "../../images/airplane-logo.svg";
import menu from "../../images/menu-up.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showMenu, setShowMenu] = useState();

  return (
    <>
      <div className="father">
        <div className="fistDiv">
          {" "}
          <h5>plutoairs@gmail.com</h5> <h5>+2348158619466</h5>
        </div>
        <div className="navCom">
          <div className="logo"> 
            <h1 className="logotext">
              Pluto <span>Airs</span>
            </h1>
            <div className="img1">
              <img src={logo} alt="airplane logo" />
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li>
              <Link to='/about'>
                  About
                </Link>
              </li>
              <li>
              <Link to='/destionation'>
                  Destination
                </Link>
              </li>
              <li>
              <Link to='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}> 
        <div className="logo">
          <div className="img1">
            <img className="airplain" src={logo} alt="airplane logo"/>
          </div>
          <h1 className="logotext">
            Pluto <span>Airs</span>
          </h1>
        </div>
        <img className="menuCon" src={menu} alt="menu icon" />
      </div>

      {showMenu ? (
        <div className="Menu">
          <nav className="navMenu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Reservation</a>
            <a href="">Contact Us</a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
