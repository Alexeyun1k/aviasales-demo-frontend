import React from "react";
import styled from "styled-components";

import pobeda from "./img/pobeda.png";
import lufthansa from "./img/lufthansa.png";
import tour from "./img/tour.png";
import Offer from "./Offer";
import queries from "../queries";

const offersData = [
  {
    head: "Билеты от 499 рублей!",
    headLogo: "",
    airLogo: pobeda,
    price: "499 ₽",
    daysLeft: "Осталось 45 дней",
    info: "Билеты от 499 рублей! Специальное предложение от авиакомпании Победа"
  },
  {
    head: "В Нью-Йорк от 20 680 ₽",
    headLogo: tour,
    airLogo: lufthansa,
    price: "20 680 ₽",
    daysLeft: "Осталось 19 дней",
    info:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    head: "В Лос-Анджелес от 20 360 ₽",
    headLogo: tour,
    airLogo: lufthansa,
    price: "20 360 ₽",
    daysLeft: "Осталось 19 дней",
    info:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

const Section = styled.section`
  padding-top: 16px;
  padding-bottom: 24px;
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Head = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: normal;
  font-size: 28px;
  text-align: left;
  color: #ffffff;
`;

const Info = styled.p`
  margin: 0px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const Link = styled.a`
  display: block;
  margin-top: 32px;
  margin-bottom: 8px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
  color: #ffffff;
`;

const LinkAndInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.md}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export default () => {
  return (
    <Section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-xl-10">
            <Head>Спецпредложения на&nbsp;авиабилеты</Head>
          </div>
        </div>

        <div className="row center-xs">
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />
          <div className="col-xs-12 col-md-4 col-xl-3">
            <Offer data={offersData[0]} />
          </div>
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl" />
          <div className="col-xs-12 col-md-4 col-xl-3">
            <Offer data={offersData[1]} />
          </div>
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl" />
          <div className="col-xs-12 col-md-4 col-xl-3">
            <Offer data={offersData[2]} />
          </div>
          <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />

          <div className="col-xs-12 col-xl-10">
            <LinkAndInfo>
              <Link href="#">Смотреть все спецпредложения</Link>
              <Info>* средняя цена по направлению</Info>
            </LinkAndInfo>
          </div>
        </div>
      </div>
    </Section>
  );
};
