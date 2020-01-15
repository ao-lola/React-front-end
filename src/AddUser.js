import React from "react";
import axios from "./apis/axios";
import classnames from "classnames";
import "./index.css";
import SideBar from "./SideBar";
import DashHeader from "./DashHeader";

class AddUser extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  constructor(props) {
    super(props);
    this.submitRegister = this.submitRegister.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  async submitRegister(e) {
    e.preventDefault();
    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      is_admin: this.state.is_admin
    };
    console.log(payload);
    axios
      .post("/users/register", { ...payload })
      .then(response => {
        console.log("response:", response);

        if (response.data) {
          console.log("successful");
          alert("User registered successfully");
          this.setState({ [e.target.name]: "" });
        } else {
          console.log("response error: ", response.data);
          alert("Error occured, kindly check fields.");
        }
      })
      .catch(error => {
        this.setState({ errors: error.response.data });
      });
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <SideBar />
        <div className="content">
          <DashHeader />
          <div className="container-fluid">
            <div className="container">
              <form onSubmit={this.submitRegister}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="input-firstname">FirstName</label>
                    <input
                      type="text"
                      name="firstname"
                      className={classnames("form-control", {
                        "is-invalid": errors.firstname
                      })}
                      id="input-firstname"
                      value={this.state.firstname}
                      onChange={this.onInputChange}
                    />
                    {errors.firstname && (
                      <div className="invalid-feedback">{errors.firstname}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label for="input-lastname">LastName</label>
                    <input
                      type="text"
                      name="lastname"
                      className={classnames("form-control", {
                        "is-invalid": errors.lastname
                      })}
                      id="input-lastname"
                      value={this.state.lastname}
                      onChange={this.onInputChange}
                    />
                    {errors.lastname && (
                      <div className="invalid-feedback">{errors.lastname}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label for="input-email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className={classnames("form-control", {
                        "is-invalid": errors.email
                      })}
                      id="input-email"
                      value={this.state.email}
                      onChange={this.onInputChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6">
                    <label for="input-password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className={classnames("form-control", {
                        "is-invalid": errors.password
                      })}
                      id="input-password"
                      value={this.state.password}
                      onChange={this.onInputChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label for="input-password">Confirm Password</label>
                  <input
                    type="password"
                    name="password2"
                    className={classnames("form-control", {
                      "is-invalid": errors.password2
                    })}
                    id="input-password"
                    value={this.state.password2}
                    onChange={this.onInputChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"></input>
                    <label className="form-check-label">IsAdmin</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
