import React from "react";
import styled from "styled-components";
import queries from "../queries";

const CityTo = styled.div`
  display: flex;
  background: #ffffff;
  position: relative;

  @media (min-width: ${queries.md}px) {
    border-radius: 0 4px 0 0;
  }

  @media (min-width: ${queries.xl}px) {
    border-radius: 0;
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
  right: 0;
  padding: 18px 16px 18px 0;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
`;

export default props => {
  return (
    <CityTo>
      <Input placeholder="Город прибытия" value={props.data.cityName} />
      <Name>{props.data.code}</Name>
    </CityTo>
  );
};
