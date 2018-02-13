import React, { Component } from "react";
// import styled, { css } from "styled-components";
// import styled from "styled-components";
import Header from "./Header/index";
import TopDestinations from "./TopDestinations/index";
import BestPrices from "./BestPrices/index";
import Offers from "./Offers/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestinations />
        <BestPrices />
        <Offers />
      </div>
    );
  }
}

export default App;
