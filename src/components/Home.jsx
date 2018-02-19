import React, { Component } from "react";
import "../styles/homepage.scss";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <img className='home-image' src={require('../images/j_k_cali.JPG')} alt=""/>
            <p className='home-content'>Some Two or sentence summary about who you are and what you are doing with the blog. Some Two or sentence summary about who you are and what you are doing with the blog. Some Two or sentence summary about who you are and what you are doing with the blog.</p>
        </div>
      </div>
    );
  }
}
