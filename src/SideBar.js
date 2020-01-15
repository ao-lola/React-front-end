import React from "react";
import "./index.css";

class SideBar extends React.Component {
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
              <a href="/dashboard" id="nav-list">
                Home
              </a>
            </li>
            <li className="active">
              <a href="/add-user" id="nav-list">
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
      </div>
    );
  }
}

export default SideBar;
