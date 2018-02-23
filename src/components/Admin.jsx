import React, { Component } from "react";
import Login from "./Login"

export default class Admin extends Component {
 
  render() {
    console.log('PROPSSS::', this.props)
    return (
    this.isAuthenticated && (<div>
        <h1>you good</h1>
      </div>
      ) || <h1>You are not Julia</h1>
    );
  }
}