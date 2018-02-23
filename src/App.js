import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";

import Results from "./Results/";
import MainPage from "./MainPage/";
import Footer from "./Footer/";

addLocaleData([...ru]);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="ru">
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={MainPage} />
            <Route path="/results" component={Results} />

            <Footer />
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
