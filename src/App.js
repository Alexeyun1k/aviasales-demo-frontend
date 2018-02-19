import React, { Component } from "react";
import Header from "./Header/";
import TopDestinations from "./TopDestinations/";
import BestPrices from "./BestPrices/";
import Offers from "./Offers/";
import Articles from "./Articles/";
import AppPromo from "./AppPromo/";
import Footer from "./Footer/";
import CompanySlider from "./CompanySlider/";
import EmailSubscription from "./EmailSubscription/";
import Results from "./Results/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopDestinations />
        <BestPrices />
        <div className="hidden-xs hidden-sm">
          <CompanySlider />
          <EmailSubscription />
        </div>
        <Offers />
        <Articles />
        <AppPromo />
        <Footer />
        <Results />
      </div>
    );
  }
}

export default App;
