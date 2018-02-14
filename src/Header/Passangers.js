import React from "react";
import styled from "styled-components";

import dropdown from "./img/dropdown.svg";

const Button = styled.button`
  padding: 18px 0 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  border: none;
  border-radius: 0 0 4px 4px;
  background: url(${dropdown}) no-repeat center right 16px;
  background-color: #ffffff;
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
