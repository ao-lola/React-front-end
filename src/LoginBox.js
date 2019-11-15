import React from "react";
import axios from "./apis/axios";
import classnames from "classnames";
import "./index.css";

class LoginBox extends React.Component {
  state = { email: "", password: "", errors: {} };

  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  async submitLogin(e) {
    e.preventDefault();
    const payload = { email: this.state.email, password: this.state.password };
    axios
      .post("/users/login", {
        ...payload
      })
      .then(response => {
        console.log("response:", response);

        if (response.data.success) {
          // Go to Dashboard
          console.log("go to dasboard");
          this.props.history.push("/dashboard");
        } else {
          // Show error
          console.log("response error:", response.data);
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
      <div className="container">
        {/* <div className=" ui header">
          <button className="ui blue basic button">Login</button>
          </div> */}
        <form
          className="my-form justify-content-center"
          onSubmit={this.submitLogin}
          autoComplete="on"
        >
          <div className="form-group">
            <label for="input-email">Email Address</label>
            <input
              type="email"
              name="email"
              className={classnames("form-control", {
                "is-invalid": errors.email
              })}
              id="input-email"
              placeholder="Enter your email address"
              value={this.state.email}
              onChange={this.onInputChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label for="input-password">Password</label>
            <input
              type="password"
              name="password"
              className={classnames("form-control", {
                "is-invalid": errors.password
              })}
              id="input-password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.onInputChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <br></br>
          <br></br>
          <a href="" className="forgot">
            Forgot Password?
          </a>
        </form>
      </div>
    );
  }
}

export default LoginBox;
