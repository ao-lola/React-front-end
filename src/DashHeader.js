import React from "react";
import "./index.css";

const DashHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav" id="my-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              PROFILE
            </a>
          </li>
          <li className="navbar-nav">
            <a className="btn btn-success" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashHeader;
