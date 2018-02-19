import React, { Component } from "react";
import julia from "../images/j_beach_leather.JPG";
import "../styles/about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <img className="about-image" src={julia} alt="" />
        <p className="about-content">
          Some Sentances about who you are, go more in depth here than on the
          first page. This should be a coupe of paragraphs. Keep it light and
          fun. This should really be your voice.Some Sentances about who you
          are, go more in depth here than on the first page. This should be a
          coupe of paragraphs. Keep it light and fun. This should really be your
          voice.Some Sentances about who you are, go more in depth here than on
          the first page. This should be a coupe of paragraphs. Keep it light
          and fun. This should really be your voice.
        </p>
        <p className="about-content">
          Some Sentances about who you are, go more in depth here than on the
          first page. This should be a coupe of paragraphs. Keep it light and
          fun. This should really be your voice.Some Sentances about who you
          are, go more in depth here than on the first page. This should be a
          coupe of paragraphs. Keep it light and fun. This should really be your
          voice.Some Sentances about who you are, go more in depth here than on
          the first page. This should be a coupe of paragraphs. Keep it light
          and fun. This should really be your voice.
        </p>
      </div>
    );
  }
}
