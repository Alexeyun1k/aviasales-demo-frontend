import React from "react";
import styled from "styled-components";
import CityFrom from "./CityFrom";
import CityTo from "./CityTo";
import DateBlock from "./DateBlock";
import Passangers from "./Passangers";

import plane from "./img/plane.svg";
import aviasales from "./img/aviasales.svg";

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

const H1 = styled.h1`
  margin-top: 48px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Cta = styled.button`
  margin-top: 16px;
  padding: 14px 0;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  background-color: #ff9241;

  &:after {
    content: url(${plane});
    margin-left: 16px;
    position: relative;
    top: 3px;
  }
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <Logo />
        <H1>Поиск дешевых авиабилетов</H1>
        <Form>
          <CityFrom />
          <CityTo />
          <DateBlock />
          <Passangers />
          <Cta>Найти билеты</Cta>
        </Form>
      </div>
    </Container>
  );
};
