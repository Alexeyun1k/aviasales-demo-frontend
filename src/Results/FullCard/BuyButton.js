import React from "react";
import styled from "styled-components";

const Button = styled.button`
  min-width: 160px;
  padding: 6px 16px 4px;
  background: #ff6d00;
  border-radius: 4px;
  border: none;
  font-weight: 400;
  line-height: 18px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

const Accented = styled.span`
  font-weight: 500;
`;

export default function BuyButton({ price }) {
  return (
    <Button>
      <Accented>Купить</Accented>
      <br />
      за {price} ₽
    </Button>
  );
}
