import React from "react";

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(e) {}
  render() {
    return (
      <div className="container">
        <form className="ui form">
          <div className="field">
            <label>FirstName</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Lastname</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="field">
            <label>Password2</label>
            <input type="password" />
          </div>

          <button className="ui red buttons" onClick={this.submitLogin}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterBox;
