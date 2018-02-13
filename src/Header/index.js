import React from "react";
import styled from "styled-components";

const Header = styled.header`
  padding-top: 12px;
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

const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 20px;
  text-align: center;

  color: #ffffff;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <H1>Поиск дешевых авиабилетов</H1>
      </div>
    </Header>
  );
};
