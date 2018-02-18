import React, { Component } from "react";
import juliaAndKeegan from "../images/julia-k-pic.jpg";
import "../styles/about.scss";
import Admin from "./Admin"

export default class Login extends Component {
  state = {
    creds: {
      email: '',
      password: ''
    }
  }

handleEmailChange = (e) => {
   this.setState({email: e.target.value});
}
handlePasswordChange = (e) => {
   this.setState({password: e.target.value});
}

isAuthenticated = (creds) => {
  console.log('CREDS::', creds)
  if (creds.userName === 'julescapade' && creds.password === 'sevthomp16') {
    console.log('GOOODODOD')
  } else {
    console.log('BADDDDDD')
  }
}

  render() {
    return (
      <div className="login">
        <form onSubmit={() => this.isAuthenticated(this.state.creds)}>
          First name:<br />
          <input type="text" name="username" onChange={this.handleEmailChange} />
          <br />
          Last name:<br />
          <input type="password" name="password" onChange={this.handlePasswordChange}/>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
