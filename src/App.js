import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ }
  }

  submitLogin(e){

  }
  render() {
    
      return(
       
        <div className="container">
              <form className="ui form">
                <div className="field">
                  <label>UserName</label>
                  <input type="text" />
                </div>
        
                <div className="field">
                  <label>Password</label>
                  <input type="password" />
                </div>
        
                <button className="ui red button" onClick={this.submitLogin.bind(this)}>Login</button>
              </form>
            </div>
            
    )
  }


}

export default App;

