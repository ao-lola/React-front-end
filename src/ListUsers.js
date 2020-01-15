import React from "react";
import axios from "./apis/axios";
import classnames from "classnames";
import "./index.css";
import SideBar from "./SideBar";
import DashHeader from "./DashHeader";

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
