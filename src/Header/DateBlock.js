import React from "react";
import styled from "styled-components";

import calendar from "./img/calendar.svg";

const Container = styled.article`
  display: flex;
  margin-left: -1px;
  margin-right: -1px;
  margin-bottom: 2px;
`;

const DatePicker = styled.button`
  flex-grow: 1;
  margin: 0 1px;
  padding: 18px 0 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;
`;

const DateBlock = props => {
  return (
    <Container>
      <DatePicker>Туда</DatePicker>
      <DatePicker>Обратно</DatePicker>
    </Container>
  );
};

export default DateBlock;
