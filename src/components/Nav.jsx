import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/navigation.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <li>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/blog">Blog</Link>
          </ul>
          <ul>
            <Link to="/about">About</Link>
          </ul>
        </li>
      </div>
    );
  }
}
