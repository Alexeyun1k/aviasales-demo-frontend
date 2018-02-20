import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import back from "./back.svg";

const Header = styled.header`
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const LinkBack = styled(Link)`
  display: block;
  margin: 0;
  padding: 20px 16px 20px 0;
  text-align: left;
  vertical-align: center;
  border: none;
  background: transparent;
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
`;

const AppliedFilter = styled.div`
  margin-left: 8px;
  magrin-right: 16px;
  flex-grow: 1;
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

export default () => {
  return (
    <Header>
      <div className="container">
        <Nav>
          <LinkBack to="/">
            <img src={back} alt="Вернуться назад" />
          </LinkBack>
          <AppliedFilter>
            <FromTo>Москва — Барселона</FromTo>
            <Additional>24 фев — 3 март, 1 пассажир</Additional>
          </AppliedFilter>
          <Currency>RUB</Currency>
        </Nav>
      </div>
    </Header>
  );
};
