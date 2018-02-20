import React from "react";

import Header from "../Header/";
import TopDestinations from "../TopDestinations/";
import BestPrices from "../BestPrices/";
import Offers from "../Offers/";
import Articles from "../Articles/";
import AppPromo from "../AppPromo/";
import Footer from "../Footer/";
import CompanySlider from "../CompanySlider/";
import EmailSubscription from "../EmailSubscription/";

const MainPage = () => (
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
  </div>
);

export default MainPage;
