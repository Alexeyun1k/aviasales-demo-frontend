import React from "react";
import styled from "styled-components";

import calendar from "./img/calendar.svg";
import queries from "../queries";

const DatePicker = styled.button`
  width: 100%;
  padding: 18px 0 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;
  @media (min-width: ${queries.md}px) {
    border-radius: 0 0 0 4px;
  }
  @media (min-width: ${queries.xl}px) {
    border-radius: 0;
  }
`;

export default props => {
  return <DatePicker>Туда</DatePicker>;
};
