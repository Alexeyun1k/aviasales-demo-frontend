import React from "react";
import styled from "styled-components";
import CityFrom from "./CityFrom";
import CityTo from "./CityTo";
import DateFrom from "./DateFrom";
import DateTo from "./DateTo";
import Passangers from "./Passangers";

import queries from "../queries";

import plane from "./img/plane.svg";

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-left: -1px;
  margin-right: -1px;
  margin-top: -2px;
`;

const CityContainer = styled.div`
  min-width: 0;
  padding: 2px 1px 0;
  flex-basis: 100%;
  @media (min-width: ${queries.md}px) {
    flex-basis: 50%;
  }
  @media (min-width: ${queries.xl}px) {
    flex-basis: 24%;
  }
`;

const DateContainer = CityContainer.extend`
  flex-basis: 50%;
  @media (min-width: ${queries.md}px) {
    flex-basis: 25%;
  }
  @media (min-width: ${queries.xl}px) {
    flex-basis: 16%;
  }
`;

const PassangersContainer = CityContainer.extend`
  @media (min-width: ${queries.xl}px) {
    flex-basis: 20%;
  }
`;

const Cta = styled.button`
  flex-basis: 100%;
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 16px;
  padding: 14px 48px;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  background-color: #ff9241;
  @media (min-width: ${queries.md}px) {
    padding-top: 16px;
    padding-bottom: 16px;
    font-weight: 900;
    font-size: 28px;
    flex-basis: auto;
    margin-top: 32px;
  }
  @media (min-width: ${queries.xl}px) {
    margin-top: 48px;
  }
  &:after {
    content: url(${plane});
    margin-left: 16px;
    position: relative;
    top: 3px;
  }
`;

export default () => {
  return (
    <Form>
      <CityContainer>
        <CityFrom />
      </CityContainer>
      <CityContainer>
        <CityTo />
      </CityContainer>
      <DateContainer>
        <DateFrom />
      </DateContainer>
      <DateContainer>
        <DateTo />
      </DateContainer>
      <PassangersContainer>
        <Passangers />
      </PassangersContainer>
      <Cta>Найти билеты</Cta>
    </Form>
  );
};
