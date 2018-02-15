import React from "react";
import styled from "styled-components";
import queries from "../queries";

import dropdown from "./img/dropdown.svg";

const Button = styled.button`
  padding: 18px 32px 18px 16px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  border: none;
  border-radius: 0 0 4px 4px;
  background: url(${dropdown}) no-repeat center right 16px;
  background-color: #ffffff;
  @media (min-width: ${queries.md}px) {
    border-radius: 0 0 4px 0;
  }
  @media (min-width: ${queries.xl}px) {
    border-radius: 0 4px 4px 0;
  }
`;

const Additional = styled.span`
  color: #a0b0b9;
`;

const Passangers = props => {
  return (
    <Button>
      1 пассажир, <Additional>эконом</Additional>
    </Button>
  );
};

export default Passangers;
