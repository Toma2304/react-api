import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import logo from "../images/Geopostcodes-logo-header.svg";
import user from "../images/user.png";
import menu from "../images/menu.png";
import close from "../images/close.png";

export default function Root(props) {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const openMenu = () => {
    if (document.querySelector(".navbar").classList.contains("open")) {
      document.querySelector(".navbar").classList.remove("open");
    } else {
      document.querySelector(".navbar").classList.add("open");
    }
  };

  const closeMenu = () => {
    document.querySelector(".navbar").classList.remove("open");
  };

  window.addEventListener("resize", function () {
    var openBtnStyle = window.getComputedStyle(
      document.querySelector(".openbtn")
    );
    if (openBtnStyle.display === "none") {
      document.querySelector(".navbar").classList.remove("open");
    }
  });

  return (
    <>
      <header className="header">
        <div className="container">
          <NavLink
            href="/Landing"
            className={activeMenu === "Landing" ? "active" : ""}
            onClick={() => handleMenuClick("Landing")}
          >
            <img src={logo} alt="logo of GeoPostCodes" className="logo" />
          </NavLink>

          <a href="#" onClick={() => openMenu()} className="openbtn">
            <img width="15px" src={menu} alt="open phone menu button" />
          </a>

          <div className="navbar">
            <NavLink
              to="/Data"
              className={activeMenu === "Data" ? "active" : ""}
              onClick={() => {
                handleMenuClick("Data");
                closeMenu();
              }}
            >
              Data Explorer
            </NavLink>
            <a href="#" onClick={() => closeMenu()}>
              Map Explorer
            </a>
            <a href="#" onClick={() => closeMenu()}>
              Download Center
            </a>
            <a href="#" onClick={() => closeMenu()}>
              Knowledge Base
            </a>

            <a href="" className="close" onClick={() => closeMenu()}>
              <img width="15px" src={close} alt="close button" />
            </a>
          </div>
          <div className="user">
            <div>
              <p className="email">jerome.mesters@geopostcodes.com</p>
              <p className="text">GeoPostcodes</p>
            </div>
            <img src={user} alt="svg of user" />
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
