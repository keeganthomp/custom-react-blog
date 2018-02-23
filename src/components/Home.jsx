import React, { Component } from "react";
import "../styles/homepage.scss";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <img
            className="home-image"
            src={require("../images/j_k_cali.JPG")}
            alt=""
          />
          <div className='home_content'>
          Come on in! Thanks for visiting. I am Julia Thompson, a 26-year-old Nashville native. I live in the Nations neighborhood of Nashville, TN with my husband and our two fur-babies: a super friendly/cuddly mut named Xenon and a grumpy lil chihuahua named Leo (“the licker”). I work as the general manager of iLoveKickboxing in Nashville and in Memphis. I am one of the youngest and most awarded GMs in the company and I’ve learned so much in my 3 year journey to being the #girlboss I am today. It hasn’t happened overnight or without my fair share of struggles.  The most rewarding part about helping to grow a business is the opportunity I’ve had to influence the people I’ve worked with in a positive way. I’ve loved every minute of it, and as much as I’d like to think I have helped them, they have helped me equally be a better teacher, listener and leader. In this space I will be discussing the lessons I’ve learned, emotions I am feeling, what has helped me in my journey, how I cope with my anxiety, what sets me on FIRE, and how I am working towards achieving my dreams.  This is me, challenging myself to be real and vulnerable, in the hopes that I can support, inspire and motivate my readers to live authentically, practice self-care, and feel fit themselves to go after their dreams.  
          </div>
        </div>
      </div>
    );
  }
}
