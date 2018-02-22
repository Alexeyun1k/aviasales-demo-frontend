import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import aviasales from "./aviasales.svg";
import { media } from "../../../queries";

const Aviasales = styled(Link)`
  display: block;
  text-decoration: none;
  line-height: 24px;
  font-size: 20px;
  color: #ffffff;
`;

const Logo = styled.img`
  margin-right: 12px;
  vertical-align: -8px;
`;

const Name = styled.span`
  display: none;

  ${media.md`display: inline;`};
`;

export default ({ className }) => {
  return (
    <Aviasales className={className} to="/">
      <Logo src={aviasales} />
      <Name>aviasales</Name>
    </Aviasales>
  );
};
