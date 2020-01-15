import React from "react";
import "./index.css";
import SideBar from "./SideBar";
import DashHeader from "./DashHeader";

class dashboard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="content">
          <DashHeader />
          <div className="container-fluid">
            <h1 className="main-text">Welcome to your dashboard.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
