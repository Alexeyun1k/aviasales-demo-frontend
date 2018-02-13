import React from "react";
import styled from "styled-components";
import Subheader from "./Subheader";

import ru from "./Flags/ru.png";
import am from "./Flags/am.png";
import md from "./Flags/md.png";
import PriceSection from "./PriceSection";

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
  padding-top: 40px;
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

const Divider = styled.hr`
  border: 0.4px dashed #afbec6;
  margin: 24px 0;
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <SectionImg src="" />
        <SectionHeader>
          Лучшие цены на авиабилеты за последний месяц
        </SectionHeader>
        <PriceSection data={prices[0]} />
        <Divider />
        <PriceSection data={prices[1]} />
        <Divider />
        <PriceSection data={prices[2]} />
      </div>
    </Container>
  );
};
