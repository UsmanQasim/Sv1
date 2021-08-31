import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidemenu from "../sidemenu/Sidemenu";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import Halal from "../../halal_logo.svg";
import { SiFacebook } from "react-icons/si";
import { AiOutlineInstagram, AiFillPhone } from "react-icons/ai";

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
        {width > 600 ? (
          <div className={`${styles.left_nev} ${styles.navSection}`}>
            <img src={Halal} alt="halallogo" className={styles.halalLogo} />
            <div className={styles.left_nev_text}>
              <AiFillPhone />
              <Link to={{ pathname: "tel:020 8680 8844" }} target="_blank">
                020 8680 8844
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={`${styles.center_nev} ${styles.navSection}`}>
          <img
            src="images/sv-logo.svg"
            alt="little"
            className={styles.logoimg}
          />
        </div>
        <div className={`${styles.right_nev} ${styles.navSection}`}>
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
              <Link to={{ pathname: "tel:020 8680 8844" }} target="_blank">
                <label>
                  <AiFillPhone size={22} />
                </label>
              </Link>
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
                  <img
                    src={Halal}
                    alt="halallogo"
                    className={styles.halalLogo}
                  />
                </div>
              ) : (
                ""
              )}
            </Sidemenu>
          </div>
        </div>
      </div>

      {width > 800 ? (
        <div className={styles.linksContainer}>
          <NavLink to="/">
            <button className={styles.linkbtn}>Pakistani Wedding</button>
          </NavLink>
          <NavLink to="/lastminuteoffers">
            <button className={styles.linkbtn}>Last Minute Offers</button>
          </NavLink>
          <NavLink to="/about">
            <button className={styles.linkbtn}>About</button>
          </NavLink>
          <NavLink to="/gallery">
            <button className={styles.linkbtn}>Gallery</button>
          </NavLink>
          <NavLink to="/contact">
            <button className={styles.linkbtn}>Contact Us</button>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
