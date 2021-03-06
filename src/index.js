import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./LoginBox";
import Register from "./RegisterBox";
import dashboard from "./dashboard";
import AddUser from "./AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/add-user" component={AddUser} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
