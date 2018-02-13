import React from "react";
import styled from "styled-components";
import Card from "./Card";

import anywhere from "./types/anywhere.svg";

import krasnodar from "./cards/1Krasnodar.png";
import sochi from "./cards/2Sochi.jpeg";

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

const TopDestinations = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background: #f8fcff;
`;

const SectionImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e2f8ff;
`;

const SectionHeader = styled.h2`
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;

  color: #4a4a4a;
`;

const TabText = styled.h3`
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;

  color: #5c5c5c;
`;

const TabImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 13px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
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
            <TabImg src={anywhere} />
            <TabText>КУДА УГОДНО</TabText>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <TabImg />
            <TabText>CОЛНЦЕ И МОРЕ</TabText>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <TabImg />
            <TabText>ШОПИНГ, ГОРОД</TabText>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <TabImg />
            <TabText>КУЛЬТУРА И ИСТОРИЯ</TabText>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <TabImg />
            <TabText>НОЧНАЯ ЖИЗНЬ</TabText>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-1">
            <TabImg />
            <TabText>ОТДЫХ С ДЕТЬМИ</TabText>
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
