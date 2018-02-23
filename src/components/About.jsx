import React, { Component } from "react";
<<<<<<< HEAD
import julia from "../images/j_beach_leather.JPG";
=======
import juliaAndKeegan from "../images/julia-k-pic.jpg";
>>>>>>> d2dae86bca916b6c58e7067a858855313c846f4a
import "../styles/about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <img className="about_image" src={julia} alt="" />
        <div className="about_content">
            <h1>Who Am I?</h1>
            <h2>
              Wife, dog mom, big sister, leader, listener, coach, friend, girl
            </h2>
            boss, writer, teacher, lover
            <h2>What do I care about?</h2>
            <p>
              Female empowerment, action-taking, doing the dream, being unique,
              living authentically, hard work, kindness, gratitude,
              self-confidence, meaningful conversations, healthy lifestyle,
              doing the hard but right thing, self-care
            </p>
            <h2>What do I enjoy?</h2>
            <p>
              adventure, travel, wine, physical fitness, healthy eating habits,
              podcasts, warm weather, fashion, interior design, hiking, binge
              watching TV shows with the hubs, photography, sharing, hosting
            </p>
            <h2>What makes me cringe?</h2>
            <p>
              Intolerance, inconsideration, disrespect, small-mindedness, lack
              of responsibility
            </p>
            <h2>What am I not good at?</h2>
            <p>
              Budgeting, patience, numbers, resting, dealing with my anxiety
            </p>
            <h2>What gets me excited?</h2>
            <p>
              Collaborating with people who have other strengths and skills,
              learning from the experts, learning about topics I know nothing
              about, hearing about the journey of successful people, spending
              time with my closest friends and family, new experiences and
              traveling to new places
            </p>
        </div>
      </div>
    );
  }
}
