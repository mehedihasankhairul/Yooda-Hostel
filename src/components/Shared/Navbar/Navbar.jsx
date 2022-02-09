import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Yooda Hostel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <li className="nav-item">Foods</li>
            <li className="nav-item">Students</li>
          </ul>

          <form className="form-inline d-flex my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 mx-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
