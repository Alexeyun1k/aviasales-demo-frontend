import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const BestOffer = styled.div``;

const Buy = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  border: none;
  background: #ff6d00;
  border-radius: 4px;
  padding: 6px 24px;
  text-align: center;
  line-height: 18px;
  font-size: 16px;
  color: #ffffff;
`;

const Accent = styled.span`
  font-weight: 500;
`;

const Company = styled.p`
  margin-top: 8px;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

export default ({ company, price }) => {
  return (
    <BestOffer>
      <Buy>
        <Accent>Купить</Accent>
        <br />за&nbsp;
        <FormattedNumber
          value={price}
          style="currency"
          currency="rub"
          minimumFractionDigits={0}
          maximumFractionDigits={2}
        />
      </Buy>
      <Company>на {company}</Company>
    </BestOffer>
  );
};
