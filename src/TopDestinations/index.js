import React from "react";
import styled from "styled-components";
import Card from "./Card";

import anywhere from "./types/anywhere.svg";
import beach from "./types/beach.svg";
import city from "./types/city.svg";
import culture from "./types/culture.svg";
import nightlife from "./types/nightlife.svg";
import withBaby from "./types/withBaby.svg";

import compass from "./compass.svg";

import krasnodar from "./cards/1Krasnodar.png";
import sochi from "./cards/2Sochi.jpeg";
import Tab from "./Tab";

const cards = [
  {
    img: krasnodar,
    city: "Краснодар",
    price: "Найти от 1 212 ₽",
    country: "РОССИЯ",
    departure: "18 марта"
  },
  {
    img: sochi,
    city: "Сочи (Адлер)",
    price: "Найти от 1 334 ₽",
    country: "РОССИЯ",
    departure: "27 марта"
  }
];

const destinations = [
  {
    icon: anywhere,
    name: "КУДА УГОДНО"
  },
  {
    icon: beach,
    name: "CОЛНЦЕ И МОРЕ"
  },
  {
    icon: city,
    name: "ШОПИНГ, ГОРОД"
  },
  {
    icon: culture,
    name: "КУЛЬТУРА И ИСТОРИЯ"
  },
  {
    icon: nightlife,
    name: "НОЧНАЯ ЖИЗНЬ"
  },
  {
    icon: withBaby,
    name: "ОТДЫХ С ДЕТЬМИ"
  }
];

const TopDestinations = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f8fcff;
`;

const SectionImg = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e2f8ff;
  background-image: url(${compass});
  background-position: center;
  background-repeat: no-repeat;
`;

const SectionHeader = styled.h2`
  margin-top: 24px;
  margin-bottom: 32px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;

  color: #4a4a4a;
`;

export default () => {
  return (
    <TopDestinations>
      <div className="container">
        <SectionImg src="" />
        <SectionHeader>
          Популярные направления перелетов из города Москва
        </SectionHeader>
        <div className="row">
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab data={destinations[0]} />
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab data={destinations[1]} />
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab data={destinations[2]} />
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab data={destinations[3]} />
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab data={destinations[4]} />
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab data={destinations[5]} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[0]} />
          </div>
          <div className="col-xs-12 col-lg-6">
            <Card card={cards[1]} />
          </div>
        </div>
      </div>
    </TopDestinations>
  );
};
