import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo_container}>
            <h1 className={styles.logo}>
                Logo Here
            </h1>
        </div>
      </div>
      <div className={styles.links}>
          <Link to="/"> 
            <button className={styles.linkbtn}>Main</button>
          </Link>
          <Link to="/about">
            <button className={styles.linkbtn}>About</button>
          </Link>
          <Link>
            <button className={styles.linkbtn}>Contact</button>
          </Link>
          <Link>
            <button className={styles.linkbtn}>Pakistan Wedding</button>
          </Link>
          <Link to='/gallery'>
            <button className={styles.linkbtn}>Gallery</button>
          </Link>
        </div>
    </>
  );
};

export default Navbar;
