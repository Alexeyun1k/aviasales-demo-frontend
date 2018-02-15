import React from "react";
import styled from "styled-components";

import fb from "./img/fb.svg";
import vk from "./img/vk.svg";
import viber from "./img/viber.svg";
import twitter from "./img/twitter.svg";
import instagram from "./img/instagram.svg";
import appStore from "./img/app-store.svg";
import winStore from "./img/win-store.svg";
import googlePlay from "./img/google-play.svg";
import queries from "../queries";

const Container = styled.section`
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
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkMore = styled.a`
  display: block;
  margin-top: 16px;
  margin-bottom: 0;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  cursor: pointer;

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

const Social = styled.a`
  padding: 0 8px;
  flex-basis: 33.3333%;
  margin-top: 0px;
  margin-bottom: 12px;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-basis: auto;
    margin-right: 8px;
  }

  &:hover {
    text-decoration: underline;
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
  margin: 12px 0 16px;
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
    <Container>
      <div className="container">
        <div className="row">
          <div class="col-xs-6 col-md-3 col-lg-2">
            <Head>СТРАНЫ</Head>
            <Link>Россия</Link>
            <Link>Таиланд</Link>
            <Link>Черногория</Link>
            <Link>Кипр</Link>
            <Link>Болгария</Link>
            <Link>Грузия</Link>
            <LinkMore>Все страны</LinkMore>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-2">
            <Head>ГОРОДА</Head>
            <Link>Москва</Link>
            <Link>Санкт-Петербург</Link>
            <Link>Симферополь</Link>
            <Link>Адлер</Link>
            <Link>Екатеринбург</Link>
            <Link>Лондон</Link>
            <LinkMore>Все города</LinkMore>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-2">
            <Head>АВИАКОМПАНИИ</Head>
            <Link>Air Berlin</Link>
            <Link>Air France</Link>
            <Link>Alitalia</Link>
            <Link>Air Baltic</Link>
            <Link>Emirates</Link>
            <Link>KLM</Link>
            <LinkMore>Все авиакомпании</LinkMore>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-2">
            <Head>АЭРОПОРТЫ</Head>
            <Link>Шереметьево</Link>
            <Link>Курумоч</Link>
            <Link>Домодедово</Link>
            <Link>Толмачево</Link>
            <Link>Владивосток</Link>
            <Link>Гамбург</Link>
            <LinkMore>Все аэропорты</LinkMore>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-2">
            <Head>НАПРАВЛЕНИЯ</Head>
            <Link>MOW – SIP</Link>
            <Link>MOW – AER</Link>
            <Link>MOW – TIV</Link>
            <Link>MOW – MRV</Link>
            <Link>LED – MOW</Link>
            <Link>MOW – BKK</Link>
          </div>
          <div class="col-xs-6 col-md-3 col-lg-2">
            <Head>СЕРВИСЫ</Head>
            <Link>Горящие авиабилеты</Link>
            <Link>Календарь низких цен</Link>
            <Link>Карта низких цен</Link>
            <Link>Спецпредложения</Link>
            <Link>Таблица цен</Link>
            <Link>Блог</Link>
            <Link>Помощь</Link>
          </div>
        </div>
      </div>
      <Divider />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-xl-7">
            <div>
              <AdditionalLink>О компании</AdditionalLink>
              <AdditionalLink>Партнёрская программа</AdditionalLink>
              <AdditionalLink>Реклама</AdditionalLink>
              <AdditionalLink>Вакансии</AdditionalLink>
              <AdditionalLink>Помощь</AdditionalLink>
              <AdditionalLink>Правила</AdditionalLink>
              <AdditionalLink>White Label авиабилеты</AdditionalLink>
            </div>
            <SocialLinks>
              <Social>
                <Icon src={vk} />Вконтакте
              </Social>
              <Social>
                <Icon src={fb} />Фейсбук
              </Social>
              <Social>
                <Icon src={instagram} />Инстаграм
              </Social>
              <Social>
                <Icon src={twitter} />Твиттер
              </Social>
              <Social>
                <Icon src={viber} />Вайбер
              </Social>
            </SocialLinks>
            <SearchLink>Поиск и бронирование отелей</SearchLink>
          </div>
          <div className="col-xs-12 col-xl-5">
            <Badges>
              <Badge>
                <img src={appStore} alt="Download from App Store" />
              </Badge>
              <Badge>
                <img src={googlePlay} alt="Download from Google Play" />
              </Badge>
              <Badge>
                <img src={winStore} alt="Download from Windows Store" />
              </Badge>
            </Badges>
            <Legal>© 2007–2018, Aviasales — дешевые авиабилеты</Legal>
          </div>
        </div>
      </div>
    </Container>
  );
};
