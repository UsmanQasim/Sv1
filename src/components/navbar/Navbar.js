import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidemenu from "../sidemenu/Sidemenu";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Halal from "../../halal_logo.svg";
import { SiFacebook } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const widthRef = useRef(null);

  const resizeHandler = () => setWidth(window.innerWidth);

  widthRef.current = resizeHandler;

  useEffect(() => {
    window.addEventListener("resize", widthRef.current);
    return () => window.removeEventListener("resize", widthRef.current);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_nev}>
          <img src={Halal} alt="halallogo" className={styles.halallogo} />
          <h2 className={styles.left_nev_text}>
            Call &nbsp;
            <a href="tel:020 8680 8844" data-tip="" className={styles.telno}>
              {" "}
              020 8680 8844{" "}
            </a>
          </h2>
        </div>
        <div className={styles.center_nev}>
          <img
            src="images/sv-logo.svg"
            alt="little"
            className={styles.logoimg}
          />
        </div>
        <div className={styles.right_nev}>
          <div className={styles.right_nev_text}>
            {width > 800 ? (
              <>
                <a
                  href="https://www.facebook.com/spicevillageofficial/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <SiFacebook className={styles.right_icons} size="40px" />
                </a>
                &nbsp;
                <a
                  href="https://www.instagram.com/spicevillageevents/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <AiOutlineInstagram
                    className={styles.right_icons}
                    size="45px"
                  />
                </a>
                &nbsp;
              </>
            ) : (
              ""
            )}
            <Sidemenu className={styles.right_icons}>
              {width <= 800 ? (
                <div className={styles.nav_sm}>
                  <a
                    href="https://www.facebook.com/spicevillageofficial/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <SiFacebook className={styles.right_icons} size="42px" />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.instagram.com/spicevillageevents/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <AiOutlineInstagram
                      className={styles.right_icons}
                      size="45px"
                    />
                  </a>
                  &nbsp;
                </div>
              ) : (
                ""
              )}
            </Sidemenu>
          </div>
        </div>
      </div>
      <div className={styles.linkscontainer}>
        <Link to="/">
          <button className={styles.linkbtn}>Pakistani Wedding</button>
        </Link>
        <Link to="/lastminuteoffers">
          <button className={styles.linkbtn}>Last Minute Offers</button>
        </Link>
        <Link to="/about">
          <button className={styles.linkbtn}>About</button>
        </Link>
        <Link to="/gallery">
          <button className={styles.linkbtn}>Gallery</button>
        </Link>
        <Link to="/contact">
          <button className={styles.linkbtn}>Contact Us</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
