import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from '../../sv-logo.svg';
import Halal from '../../halal_logo.svg';
import { SiFacebook } from 'react-icons/si';
import { AiOutlineInstagram } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from "../../GalleryPhotos/SVlogo.png"
import realLogo from "../../sv-logo.png"

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_nev}>
          <img src={Halal} alt="halallogo" />
          <h2 className={styles.left_nev_text}>Call &nbsp;<a href="tel:020 8680 8844" data-tip="" className={styles.telno}> 020 8680 8844 </a></h2>
        </div>
        <div className={styles.center_nev}>
          <img src={logo} alt="little" className={styles.logoimg} />
        </div>
        <div className={styles.right_nev}>
          <p className={styles.right_nev_text}>follow us&nbsp;
            <a href="https://www.facebook.com/spicevillageofficial/"><SiFacebook className={styles.right_icons} /></a>&nbsp;
            <a href="https://www.instagram.com/spicevillageevents/"><AiOutlineInstagram className={styles.right_icons} /></a>&nbsp;
            <GiHamburgerMenu className={styles.right_icons} />&nbsp;
          </p>
        </div>
      </div>
      <div className={styles.links}>
        <Link to="/">
          <button className={styles.linkbtn}>Pakistani Wedding</button>
        </Link>
        <Link to="/lastminuteoffers">
          <button className={styles.linkbtn}>Last Minute Offers</button>
        </Link>
        <Link to='/about'>
          <button className={styles.linkbtn}>About</button>
        </Link>
        <Link to='/gallery'>
          <button className={styles.linkbtn}>Gallery</button>
        </Link>
        <Link to='/contact'>
          <button className={styles.linkbtn}>Contact Us</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
