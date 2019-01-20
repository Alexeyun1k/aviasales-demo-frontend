import React from "react";
import styled from "styled-components";

import fb from "./img/fb.svg";
import vk from "./img/vk.svg";
import viber from "./img/viber.svg";
import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";
import app_store from "./img/app-store.svg";
import win_store from "./img/win-store.svg";
import google_play from "./img/google-play.svg";
import queries from "../queries";

const Footer = styled.footer`
  padding-top: 16px;
  padding-bottom: 8px;
  background: #ffffff;
`;

const Head = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
`;

const Link = styled.a`
  display: block;
  margin-top: 12px;
  margin-bottom: 0;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #fd8a27;
  }
`;

const LinkMore = Link.extend`
  margin-top: 16px;
  font-weight: 500;
  color: #4a4a4a;

  &::after {
    position: absolute;
    transition: 0.2s ease-in-out;
    transform: translateX(2px);
    content: " →";
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

const Divider = styled.hr`
  margin: 24px 0;
  border: none;
  border-bottom: 1px solid #e0e6e8;
`;

const AdditionalLink = Link.extend`
  display: inline-block;
  margin-right: 12px;
  margin-top: 8px;
`;

const SearchLink = Link.extend`
  width: auto;
  margin: 12px 0 16px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  margin-left: -8px;
  margin-right: -8px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const Social = Link.extend`
  padding: 0 8px;
  flex-basis: 33.3333%;
  margin-top: 0px;
  margin-bottom: 12px;
  color: #4a4a4a;

  @media (min-width: 768px) {
    flex-basis: auto;
    margin-right: 8px;
  }
`;

const Icon = styled.img`
  vertical-align: middle;
  margin-right: 8px;
`;

const Badges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -10px;

  @media (min-width: ${queries.md}px) {
    flex-direction: row;
  }

  @media (min-width: ${queries.xl}px) {
    justify-content: flex-end;
    margin-top: 12px;
  }
`;

const Badge = styled.a`
  display: block;
  margin-bottom: 8px;
  margin-right: 10px;
`;

const Legal = styled.p`
  margin: 14px 0 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  color: #5b5b5c;

  @media (min-width: ${queries.md}px) {
    text-align: left;
  }

  @media (min-width: ${queries.xl}px) {
    text-align: right;
  }
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Head>СТРАНЫ</Head>
            <Link href="#">Россия</Link>
            <Link href="#">Таиланд</Link>
            <Link href="#">Черногория</Link>
            <Link href="#">Кипр</Link>
            <Link href="#">Болгария</Link>
            <Link href="#">Грузия</Link>
            <LinkMore href="#">Все страны</LinkMore>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Head>ГОРОДА</Head>
            <Link href="#">Москва</Link>
            <Link href="#">Санкт-Петербург</Link>
            <Link href="#">Симферополь</Link>
            <Link href="#">Адлер</Link>
            <Link href="#">Екатеринбург</Link>
            <Link href="#">Лондон</Link>
            <LinkMore>Все города</LinkMore>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Head>АВИАКОМПАНИИ</Head>
            <Link href="#">Air Berlin</Link>
            <Link href="#">Air France</Link>
            <Link href="#">Alitalia</Link>
            <Link href="#">Air Baltic</Link>
            <Link href="#">Emirates</Link>
            <Link href="#">KLM</Link>
            <LinkMore href="#">Все авиакомпании</LinkMore>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Head>АЭРОПОРТЫ</Head>
            <Link href="#">Шереметьево</Link>
            <Link href="#">Курумоч</Link>
            <Link href="#">Домодедово</Link>
            <Link href="#">Толмачево</Link>
            <Link href="#">Владивосток</Link>
            <Link href="#">Гамбург</Link>
            <LinkMore href="#">Все аэропорты</LinkMore>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Head>НАПРАВЛЕНИЯ</Head>
            <Link href="#">MOW – SIP</Link>
            <Link href="#">MOW – AER</Link>
            <Link href="#">MOW – TIV</Link>
            <Link href="#">MOW – MRV</Link>
            <Link href="#">LED – MOW</Link>
            <Link href="#">MOW – BKK</Link>
          </div>
          <div className="col-xs-6 col-md-3 col-lg-2">
            <Head>СЕРВИСЫ</Head>
            <Link href="#">Горящие авиабилеты</Link>
            <Link href="#">Календарь низких цен</Link>
            <Link href="#">Карта низких цен</Link>
            <Link href="#">Спецпредложения</Link>
            <Link href="#">Таблица цен</Link>
            <Link href="#">Блог</Link>
            <Link href="#">Помощь</Link>
          </div>
        </div>
      </div>
      <Divider />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl-7">
            <div>
              <AdditionalLink href="#">О компании</AdditionalLink>
              <AdditionalLink href="#">Партнёрская программа</AdditionalLink>
              <AdditionalLink href="#">Реклама</AdditionalLink>
              <AdditionalLink href="#">Вакансии</AdditionalLink>
              <AdditionalLink href="#">Помощь</AdditionalLink>
              <AdditionalLink href="#">Правила</AdditionalLink>
              <AdditionalLink href="#">White Label авиабилеты</AdditionalLink>
            </div>
            <SocialLinks>
              <Social href="#">
                <Icon src={vk} />Вконтакте
              </Social>
              <Social href="#">
                <Icon src={fb} />Фейсбук
              </Social>
              <Social href="#">
                <Icon src={instagram} />Инстаграм
              </Social>
              <Social href="#">
                <Icon src={twitter} />Твиттер
              </Social>
              <Social href="#">
                <Icon src={viber} />Вайбер
              </Social>
            </SocialLinks>
            <SearchLink href="#">Поиск и бронирование отелей</SearchLink>
          </div>
          <div className="col-xs-12 col-xl-5">
            <Badges>
              <Badge href="#">
                <img src={app_store} alt="Download from App Store" />
              </Badge>
              <Badge href="#">
                <img src={google_play} alt="Download from Google Play" />
              </Badge>
              <Badge href="#">
                <img src={win_store} alt="Download from Windows Store" />
              </Badge>
            </Badges>
            <Legal>© 2007–2018, Aviasales — дешевые авиабилеты</Legal>
          </div>
        </div>
      </div>
    </Footer>
  );
};
