import React from "react";
import styled from "styled-components";
import PriceSection from "./PriceSection";

import ru from "./Flags/ru.png";
import am from "./Flags/am.png";
import md from "./Flags/md.png";
import calendar from "./calendar.svg";

const prices = [
  {
    head: {
      flag: ru,
      city: "Симферополь (Крым)",
      direction: "КРЫМ"
    },
    prices: [
      {
        from: "Из Москвы",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "от 7 857 ₽"
      },
      {
        from: "Из Новосибирска",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Екатеринбурга",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Челябинска",
        price: "от 9 148 ₽"
      }
    ]
  },
  {
    head: {
      flag: am,
      city: "Ереван",
      direction: "АРМЕНИЯ"
    },
    prices: [
      {
        from: "Из Москвы",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "от 7 857 ₽"
      },
      {
        from: "Из Новосибирска",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Екатеринбурга",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Челябинска",
        price: "от 9 148 ₽"
      }
    ]
  },
  {
    head: {
      flag: md,
      city: "Симферополь (Крым)",
      direction: "КРЫМ"
    },
    prices: [
      {
        from: "Из Москвы",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "от 7 857 ₽"
      },
      {
        from: "Из Новосибирска",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Екатеринбурга",
        price: "от 4 813 ₽"
      },
      {
        from: "Из Челябинска",
        price: "от 9 148 ₽"
      }
    ]
  }
];

const Container = styled.section`
  padding-top: 32px;
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
  background-image: url(${calendar});
  background-position: center;
  background-repeat: no-repeat;
`;

const Head = styled.h2`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;

  color: #4a4a4a;
`;

const Divider = styled.hr`
  border: 0.4px dashed #afbec6;
  margin: 24px 0;
`;

const Info = styled.p`
  margin-top: 40px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
`;

const SecondaryInfo = styled.p`
  margin-top: 24px;
  margin-bottom: 0px;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <SectionImg />
        <Head>Лучшие цены на авиабилеты за последний месяц</Head>
        <PriceSection data={prices[0]} />
        <Divider />
        <PriceSection data={prices[1]} />
        <Divider />
        <PriceSection data={prices[2]} />
        <Info>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </Info>
        <SecondaryInfo>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </SecondaryInfo>
      </div>
    </Container>
  );
};
