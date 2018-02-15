import React from "react";
import styled from "styled-components";
import queries from "../queries";

import arrows from "./img/arrows.svg";

const Container = styled.article`
  display: flex;
  background: #ffffff;
  border-radius: 4px 4px 0 0;
  @media (min-width: ${queries.md}px) {
    border-radius: 4px 0 0 0;
  }
  @media (min-width: ${queries.xl}px) {
    border-radius: 4px 0 0 4px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  min-width: 0;
  background-color: transparent;
  border: none;
  padding: 18px 0 18px 16px;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  &::placeholder {
    color: #a0b0b9;
  }
`;

const Name = styled.div`
  padding: 18px 0;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
`;

const ChangeCities = styled.button`
  width: 44px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
  border: none;
  background: url(${arrows}) no-repeat center right 16px;
`;

const CityFrom = props => {
  return (
    <Container>
      <Input placeholder="Город вылета" />
      <Name>MOW</Name>
      <ChangeCities />
    </Container>
  );
};

export default CityFrom;
