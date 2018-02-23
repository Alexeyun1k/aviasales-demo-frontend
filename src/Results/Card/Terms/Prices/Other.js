import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const Other = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.a`
  margin-top: 4px;
  display: flex;
  line-height: 18px;
  font-size: 12px;
  text-decoration: none;
  color: #59bce5;
`;

const Company = styled.p`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;

const Price = styled.p`
  margin: 0;
`;

const Expand = styled.button`
  margin-top: 8px;
  border: none;
  background: transparent;
  line-height: 18px;
  font-size: 12px;
  text-decoration: none;
  color: #59bce5;
`;

export default ({ prices }) => {
  const shown = prices.slice(0, 2);
  const hidden = prices.slice(2);

  return (
    <Other>
      {shown.map((offer, key) => (
        <Line key={key}>
          <Company>{offer.company}</Company>
          <Price>
            <FormattedNumber
              value={offer.price}
              style="currency"
              currency="rub"
              minimumFractionDigits="0"
              maximumFractionDigits="2"
            />
          </Price>
        </Line>
      ))}
      {hidden.length > 0 && <Expand>+ Еще {hidden.length} предложения</Expand>}
    </Other>
  );
};
