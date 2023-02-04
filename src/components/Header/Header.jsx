import React from "react";
import "./heading.scss";
import scorebet from "../../Assets/scorebet.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="parent heading-par">
      <div className="container heading-cont">
        <img src={scorebet} />
        <h1>Share Free Bets</h1>
        <div className="header-buttons">
          <Link to="/primary">
            <button className="btn btn-primary">Free Bets Tutorial</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
