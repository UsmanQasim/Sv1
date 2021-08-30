import React from "react";
import { Link } from "react-router-dom";
import logo from "../sv-logo.svg";

const PageNotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "15px",
        }}
      >
        <img src={logo} width="auto" height="150px" alt="logo" />
        <h1
          style={{
            fontSize: "180px",
            color: "maroon",
            fontWeight: "700",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "50px",
            color: "maroon",
            fontWeight: "700",
          }}
        >
          Page Not Found
        </h2>
        <Link to="/">
          <button
            style={{
              width: "250px",
              height: "50px",
              border: 0,
              backgroundColor: "#9D915D",
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Return Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
