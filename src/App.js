import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Results from "./Results/";
import MainPage from "./MainPage/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={MainPage} />
          <Route path="/results" component={Results} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
