import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../queries";
import Logo from "./Logo";

import back from "./back.svg";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  ${media.md`
    padding-top: 8px;
    padding-bottom: 8px;
  `};

  ${media.lg`
    padding-top: 10px;
    padding-bottom: 10px;
  `};
`;

const Aviasales = styled(Logo)`
  display: none;
  display: ${props => (props.compact ? "none" : "block")};

  ${media.md`
    display: block;
  `};
`;

const LinkBack = styled(Link)`
  display: block;
  margin: 0;
  padding: 12px 16px 12px 0;
  text-align: left;
  vertical-align: center;
  border: none;
  background: transparent;

  ${media.md`
    display: none;
  `};
`;

const Currency = styled.button`
  margin-left: auto;
  padding: 6px 12px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #ffffff;

  ${media.md`
    font-size: 16px;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
  `};
`;

const AppliedFilter = styled.div`
  margin-left: 8px;
  magrin-right: 16px;
  flex-grow: 1;

  ${media.md`
    display: none;
  `};
`;

const FromTo = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
`;

const Additional = styled.aside`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
`;

export default ({ compact }) => {
  return (
    <Nav>
      <Aviasales compact={compact} />

      {compact && (
        <LinkBack to="/">
          <img src={back} alt="Вернуться назад" />
        </LinkBack>
      )}

      {compact && (
        <AppliedFilter>
          <FromTo>Москва — Барселона</FromTo>
          <Additional>24 фев — 3 март, 1 пассажир</Additional>
        </AppliedFilter>
      )}

      {compact && <Currency>RUB</Currency>}
    </Nav>
  );
};
