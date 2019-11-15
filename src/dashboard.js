import React from "react";
import "./index.css";

class dashboard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="sidebar" id="sidebar">
          <div className="sidebar-header">
            <h2>Dashboard</h2>
          </div>

          <ul className="list-styled-components">
            <p>My dashboard</p>
            <li className="active">
              <a href="#" id="nav-list">
                Add User
              </a>
            </li>
            <li>
              <a href="#" id="nav-list">
                Profile
              </a>
            </li>
            <li>
              <a href="#" id="nav-list">
                View Users
              </a>
            </li>
          </ul>
        </nav>

        <div className="content">
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
          <div className="container-fluid">
            <h1 className="main-text">Welcome to your dashboard.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
