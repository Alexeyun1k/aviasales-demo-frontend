import React from "react";
import styled from "styled-components";
import queries from "../queries";

import arrows from "./img/arrows.svg";

const CityFrom = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 4px 4px 0 0;
  position: relative;

  @media (min-width: ${queries.md}px) {
    border-radius: 4px 0 0 0;
  }

  @media (min-width: ${queries.xl}px) {
    border-radius: 4px 0 0 4px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 18px 0 18px 16px;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  ::placeholder {
    color: #a0b0b9;
  }

  :focus {
    outline: 2px solid #fd8a27;
    outline-offset: 0px;
  }
`;

const Name = styled.div`
  position: absolute;
  right: 44px;
  padding: 18px 0;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
`;

const ChangeCities = styled.button`
  position: absolute;
  right: 0;
  width: 44px;
  height: 100%;
  background: transparent;
  border: none;
`;

export default props => {
  return (
    <CityFrom>
      <Input placeholder="Город вылета" />
      <Name>MOW</Name>
      <ChangeCities>
        <img src={arrows} alt="Поменять города местами" />
      </ChangeCities>
    </CityFrom>
  );
};
