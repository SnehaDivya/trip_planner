import React from "react";
import { FaHome } from "react-icons/fa";
const FrontPage = function () {
  return (
    <>
      <div className="Navigation_tab">
        <div className="topnav">
          <a href="login">Login</a>
          <a href="register">Register</a>
          <a href="CustomerDetails">People</a>
          <a href="destinations">Destinations</a>
          <a href="reviews">Reviews</a>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
