import React, { Component } from "react";
// import styled, { css } from "styled-components";
// import styled from "styled-components";
import Header from "./Header/";
import TopDestinations from "./TopDestinations/";
import BestPrices from "./BestPrices/";
import Offers from "./Offers/";
import Articles from "./Articles/";
import AppPromo from "./AppPromo/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestinations />
        <BestPrices />
        <Offers />
        <Articles />
        <AppPromo />
        <Footer />
      </div>
    );
  }
}

export default App;
