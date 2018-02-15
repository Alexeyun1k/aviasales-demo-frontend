import React from "react";
import styled from "styled-components";
import queries from "../queries";

import aviasales from "./img/aviasales.svg";
import SearchForm from "./SearchForm";

const Container = styled.header`
  padding-top: 12px;
  padding-bottom: 88px;
  min-height: 234px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
`;

const Logo = styled.a`
  display: block;
  background: url(${aviasales}) no-repeat;
  width: 30px;
  height: 30px;
`;

const Head = styled.h1`
  margin-top: 48px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  @media (min-width: ${queries.md}px) {
    margin-bottom: 8px;
    line-height: 48px;
    font-size: 32px;
  }
  @media (min-width: ${queries.xl}px) {
    font-size: 40px;
  }
`;
const Paragraph = styled.p`
  display: none;
  @media (min-width: ${queries.md}px) {
    margin-top: 8px;
    display: block;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
  @media (min-width: ${queries.xl}px) {
    font-size: 24px;
  }
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <Logo />
        <div className="row center-md">
          <div className="col-xs-12 col-md-10">
            <Head>Поиск дешевых авиабилетов</Head>
            <Paragraph>Лучший способ купить авиабилеты дешево</Paragraph>
            <SearchForm />
          </div>
        </div>
      </div>
    </Container>
  );
};
