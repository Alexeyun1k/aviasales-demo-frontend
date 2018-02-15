import React from "react";
import styled from "styled-components";
import Card from "./Card";

import anywhere from "./types/anywhere.svg";
import beach from "./types/beach.svg";
import city from "./types/city.svg";
import culture from "./types/culture.svg";
import nightlife from "./types/nightlife.svg";
import withBaby from "./types/withBaby.svg";

import ru from "./Flags/ru.png";
import am from "./Flags/am.png";
import md from "./Flags/md.png";

import compass from "./compass.svg";

import krasnodar from "./cards/1Krasnodar.png";
import sochi from "./cards/2Sochi.jpeg";
import Tab from "./Tab";

const cards = [
  {
    img: krasnodar,
    flag: ru,
    city: "Краснодар",
    price: "Найти от 1 212 ₽",
    country: "РОССИЯ",
    departure: "18 марта"
  },
  {
    img: sochi,
    flag: ru,
    city: "Сочи (Адлер)",
    price: "Найти от 1 334 ₽",
    country: "РОССИЯ",
    departure: "27 марта"
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
        <div className="row center-md">
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab img={anywhere}>
              КУДА<br />УГОДНО
            </Tab>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab img={beach}>
              CОЛНЦЕ<br />И МОРЕ
            </Tab>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab img={city}>
              ШОПИНГ,<br />ГОРОД
            </Tab>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab img={culture}>
              КУЛЬТУРА<br />И ИСТОРИЯ
            </Tab>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab img={nightlife}>
              НОЧНАЯ<br />ЖИЗНЬ
            </Tab>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <Tab img={withBaby}>
              ОТДЫХ<br />С ДЕТЬМИ
            </Tab>
          </div>
        </div>

        <div className="row center-md">
          <div className="col-xs-12 col-md-5">
            <Card card={cards[0]} />
          </div>
          <div className="col-xs-12 col-md-5">
            <Card card={cards[1]} />
          </div>
          <div className="col-xs-12 col-md-5">
            <Card card={cards[0]} />
          </div>
          <div className="col-xs-12 col-md-5">
            <Card card={cards[1]} />
          </div>
        </div>
      </div>
    </TopDestinations>
  );
};
