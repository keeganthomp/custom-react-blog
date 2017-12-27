import React, { Component } from "react";
import Blog from "./blog/";
import About from "./About";
import Homepage from "./Home";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
