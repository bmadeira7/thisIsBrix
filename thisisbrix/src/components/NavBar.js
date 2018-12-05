import React from "react";
import "./styles.css";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="https://soundcloud.com/thisisbrix" target="_blank">
      thisIsBrix
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Bio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           Shows
          </a>
        </li>
       
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Latest Tracks
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="https://soundcloud.com/thisisbrix/thisisbrix-withoutone" target="_blank">
              "Without One"
            </a>
            <a className="dropdown-item" href="https://soundcloud.com/thisisbrix/thisisbrix-for-your-wine-clip" target="_blank">
              "For Your Wine"
            </a>
           
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Mixes
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a className="dropdown-item" href="https://soundcloud.com/takeqontrolradio/take-qontrol-radio-episode-72718-this-is-brix" target="_blank">
              Take Qontrol Radio Mix
            </a>
            {/* <a className="dropdown-item" href="#">
              Another action
            </a> */}
          </div>
        </li>
        <li>
          <a className="nav-link" href="https://soundcloud.com/thisisbrix">
            {" "}
            <i className="fab fa-soundcloud soundCloud" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
