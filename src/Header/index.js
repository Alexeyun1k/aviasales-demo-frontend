import React from "react";
import styled from "styled-components";
import queries from "../queries";

import NavBar from "./NavBar/index";
import Form from "../Form/";

const Header = styled.header`
  min-height: ${props => (props.compact ? "0" : "100vh")};
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

const FormAndHeadings = styled.div`
  min-height: ${props => (props.compact ? "0" : "100vh")};
  display: ${props => (props.compact ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  padding: ${props => (props.compact ? "32px 0" : "24px 0 88px")};

  @media (min-width: ${queries.md}px) {
    display: flex;
  }
`;

const Head = styled.h1`
  margin-top: 0px;
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

export default ({ compact }) => {
  return (
    <Header compact={compact}>
      <div className="container">
        <NavBar compact={compact} />
        <FormAndHeadings compact={compact}>
          {!compact && (
            <div>
              <Head>Поиск дешевых авиабилетов</Head>
              <Paragraph>Лучший способ купить авиабилеты дешево</Paragraph>
            </div>
          )}

          <div className="row center-md">
            <div className={compact ? "col-xs-12" : "col-xs-12 col-md-10"}>
              <Form compact={compact} />
            </div>
          </div>
        </FormAndHeadings>
      </div>
    </Header>
  );
};
