import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styles from "../footer/Footer.module.css";

const footer = () => {
  return (
    <>
      <Container className={styles.mainContainer}>
        <Container className={styles.svbar}>
          <span className={styles.svbarlogo}>
            <img
              src="/images/sv-logo.svg"
              className={styles.svlogo}
              alt="Sv Logo"
            />
          </span>
          <hr />
        </Container>
        <Container className={styles.container}>
          <Link to="/termsandcondition" className={styles.links}>
            Terms and Conditions
          </Link>
          {/* <Link to="/covid" className={styles.links}>
            Covid-19 Updates
          </Link> */}
        </Container>
        <Container className={styles.bottomLine}>
          <p>All Rights Reserved 2021. Terms. Privacy Notice.</p>
        </Container>
      </Container>
    </>
  );
};

export default footer;
