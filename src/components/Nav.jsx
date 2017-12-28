import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import classNames from 'classnames';


export default class Navbar extends Component {
  constructor (props) {
    super()
    this.state = {
      isMobileActive: false
    }
  }
  render() {
    const navigationItemsClass = classNames('navigation-items', {
      'navigation-items-visible':  this.state.isMobileActive
    })
    return (
      <div className='navigation'>
        <ul className={navigationItemsClass}>
          <li className='navigation-items-item'>
            <Link to="/" onClick={() => {
            this.setState({ isMobileActive: false });
          }}>Home</Link>
          </li>
          <li className='navigation-items-item'onClick={() => {
            this.setState({ isMobileActive: false });
          }}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className='navigation-items-item'onClick={() => {
            this.setState({ isMobileActive: false });
          }}>
            <Link to="/about">About</Link>
          </li>
        </ul>
          <div className='overlay-thing' />
        <span
          className="navigation-mobile-icon"
          onClick={() => {
            this.setState({ isMobileActive: !this.state.isMobileActive });
          }}
        >
          &#9776;
        </span>
      </div>
    );
  }
}
