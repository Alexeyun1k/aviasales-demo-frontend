import React from 'react';
import styled from 'styled-components';
import PriceSection from './PriceSection';

import ru from './Flags/ru.png';
import am from './Flags/am.png';
import es from './Flags/es.png';
import calendar from './calendar.svg';
import queries from '../queries';

const prices = [
  {
    head: {
      flag: ru,
      city: 'Симферополь (Крым)',
      direction: 'КРЫМ',
    },
    prices: [
      {
        from: 'Из Москвы',
        price: 4813,
      },
      {
        from: 'Из Санкт-Петербурга',
        price: 7857,
      },
      {
        from: 'Из Новосибирска',
        price: 4813,
      },
      {
        from: 'Из Екатеринбурга',
        price: 4813,
      },
      {
        from: 'Из Челябинска',
        price: 9148,
      },
    ],
  },
  {
    head: {
      flag: am,
      city: 'Ереван',
      direction: 'АРМЕНИЯ',
    },
    prices: [
      {
        from: 'Из Москвы',
        price: 4813,
      },
      {
        from: 'Из Санкт-Петербурга',
        price: 7857,
      },
      {
        from: 'Из Новосибирска',
        price: 4813,
      },
      {
        from: 'Из Екатеринбурга',
        price: 4813,
      },
      {
        from: 'Из Челябинска',
        price: 9148,
      },
    ],
  },
  {
    head: {
      flag: es,
      city: 'Кишинёв',
      direction: 'МОЛДАВИЯ',
    },
    prices: [
      {
        from: 'Из Москвы',
        price: 4813,
      },
      {
        from: 'Из Санкт-Петербурга',
        price: 7857,
      },
      {
        from: 'Из Новосибирска',
        price: 4813,
      },
      {
        from: 'Из Екатеринбурга',
        price: 4813,
      },
      {
        from: 'Из Челябинска',
        price: 9148,
      },
    ],
  },
];

const Section = styled.section`
  padding-top: 32px;
  padding-bottom: 40px;
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);
`;

const Icon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
  height: 60px;
`;

const Head = styled.h2`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;

  @media (min-width: ${queries.md}px) {
    line-height: 36px;
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px dashed #afbec6;
  margin: 24px 0;

  @media (min-width: ${queries.xl}px) {
    border: none;
    border-left: 1px dashed #afbec6;
    height: 100%;
    width: 1px;
    margin: 0 auto;
  }
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

export default () => (
  <Section>
    <div className="container">
      <Icon src={calendar} />
      <Head>Лучшие цены на авиабилеты за последний месяц</Head>

      <div className="row center-xs">
        <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />
        <div className="col-xs-12 col-md-10 col-xl-3">
          <PriceSection data={prices[0]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl">
          <Divider />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-3">
          <PriceSection data={prices[1]} />
        </div>
        <div className="col-xs-12 col-md-10 col-xl">
          <Divider />
        </div>
        <div className="col-xs-12 col-md-10 col-xl-3">
          <PriceSection data={prices[2]} />
        </div>
        <div className="hidden-xs hidden-sm hidden-md hidden-lg col-xl-1" />

        <div className="col-xs-12 col-md-10 col-xl-6">
          <Info>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и
            сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
          </Info>
          <SecondaryInfo>
            Цены, найденные пользователями за последние 48 часов, не являются офертой.
          </SecondaryInfo>
        </div>
      </div>
    </div>
  </Section>
);
