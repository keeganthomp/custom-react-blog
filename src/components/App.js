import React, { Component } from "react";
import Blog from "./blog/";
import About from "./About";
import Login from "./Login.jsx"
import "../styles/app.scss";
import Homepage from "./Home";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Nav";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 className="home-title">Julias Blog</h1>
          <div className='social-container'>
            <a className='social-container-link' href="https://www.facebook.com/julia.severino.thompson"><i className="social-container-item fa fa-facebook" aria-hidden="true" /></a>
            <a className='social-container-link' href="https://www.instagram.com/julescapade/"><i className="social-container-item fa fa-instagram" aria-hidden="true" /></a>
            <a className='social-container-link' href="https://www.linkedin.com/in/juliasev/"><i className="social-container-item fa fa-linkedin" aria-hidden="true" /></a>
          </div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/protected" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
