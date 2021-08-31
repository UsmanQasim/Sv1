import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SidemenuData } from "./SidemenuData";
import "./Sidemenu.css";
import { IconContext } from "react-icons";

const Sidemenu = ({ children }) => {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "maroon" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <GiHamburgerMenu className="icon-style" onClick={showSidebar} />
          </Link>
        </div>
        <nav
          style={{ zIndex: "10000" }}
          className={sidebar ? "nav-menu active" : "nav-menu"}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose className="icon-style" />
              </Link>
            </li>
            {SidemenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="sidemenu_text_color">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {children}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidemenu;
