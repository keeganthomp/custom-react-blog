import React, { Component } from "react";
import Blog from "./blog/";
import About from "./About";
import "../styles/app.scss";
import Homepage from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Nav";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1 className="home-title">Fit To Dream</h1>
          <div className='social-container'>
            <a className='social-container-link' href="https://www.facebook.com/julia.severino.thompson"><i className="social-container-item fa fa-facebook" aria-hidden="true" /></a>
            <a className='social-container-link' href="https://www.instagram.com/julescapade/"><i className="social-container-item fa fa-instagram" aria-hidden="true" /></a>
            <a className='social-container-link' href="https://www.linkedin.com/in/juliasev/"><i className="social-container-item fa fa-linkedin" aria-hidden="true" /></a>
          </div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
