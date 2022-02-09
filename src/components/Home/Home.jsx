import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
// import image from assets
import foodIcon from "../../assets/images/food.jpg";
import addStudent from "../../assets/images/student logo.png";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 menuBox">
            <Link to="addfood">
              <div className="item">
                <span>add Food</span>
                <img src={foodIcon} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-md-3 menuBox">
            <div className="item">
              <span>add New Student</span>
              <img src={addStudent} alt="" />
            </div>
          </div>
          <div className="col-md-3 menuBox">
            <div className="item">
              <span>add Food</span>
              <img src={foodIcon} alt="" />
            </div>
          </div>
          <div className="col-md-3 menuBox">
            <div className="item">
              <span>add Food</span>
              <img src={foodIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
