import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/data_explorer.svg";
import img2 from "../images/map_explorer.webp";
import img3 from "../images/dowload_center.svg";
import img4 from "../images/kb.svg";
import bg from "../images/main_background.webp";

export default function Landing(props) {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">Welcome to GeoPostcodes' Customer Portal</h1>
        <div className="features">
          <article>
            <NavLink
              to="/Data"
              className={activeMenu === "Data" ? "active content" : "content"}
              onClick={() => handleMenuClick("Data")}
            >
              <div>
                <h3 className="name">Data Explorer</h3>
              </div>
            </NavLink>
            <img
              src={img1}
              alt="lines with magnifying glass"
              className="photo one"
            />
          </article>
          <article>
            <a href="#" className="content">
              <div>
                <h3 className="name">Map Explorer</h3>
                <img
                  src={img2}
                  alt="map with dots on it"
                  className="photo two"
                />
              </div>
            </a>
          </article>
          <article>
            <a href="#" className="content">
              <div>
                <h3 className="name">Download Center</h3>
                <img src={img3} alt="pieces of paper" className="photo three" />
              </div>
            </a>
          </article>
          <article>
            <a href="#" className="content">
              <div>
                <h3 className="name">Knowledge Base</h3>
                <img src={img4} alt="two books" className="photo four" />
              </div>
            </a>
          </article>
        </div>
      </div>
      <div className="globe">
        <img src={bg} alt="" />
      </div>
    </section>
  );
}
