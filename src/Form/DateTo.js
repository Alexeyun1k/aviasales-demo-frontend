import React from "react";
import styled from "styled-components";

import calendar from "./img/calendar.svg";

const DatePicker = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 18px 40px 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;

  :focus {
    outline: 2px solid #fd8a27;
    outline-offset: 0px;
  }
`;

export default props => {
  return <DatePicker>Обратно</DatePicker>;
};
