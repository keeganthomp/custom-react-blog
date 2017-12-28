import React, { Component } from "react";
import "../styles/homepage.scss";
import julia from '../images/julia-pic.jpeg'

export default class Homepage extends Component {
  render() {
  console.log('PROPSS::', this.props)
    return (
      <div>
        <div className="home">
            <h1 className='home-title'>Julias Blog</h1>
            <img className='home-image' src={julia} alt="werer"/>
            <p className='home-content'>Some Two or sentence summary about who you are and what you are doing with the blog. Some Two or sentence summary about who you are and what you are doing with the blog. Some Two or sentence summary about who you are and what you are doing with the blog.</p>
        </div>
      </div>
    );
  }
}
