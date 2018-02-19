import React, { Component } from "react";
import "../styles/homepage.scss";
// import kAndj from '../images/k-j.jpg'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <img className='home-image' src={require('../images/k-j.jpg')} alt=""/>
            <p className='home-content'>Some Two or sentence summary about who you are and what you are doing with the blog. Some Two or sentence summary about who you are and what you are doing with the blog. Some Two or sentence summary about who you are and what you are doing with the blog.</p>
        </div>
      </div>
    );
  }
}
