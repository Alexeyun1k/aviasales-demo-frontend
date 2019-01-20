import React from "react";
import styled from "styled-components";
import BestOffer from "./BestOffer";
import Other from "./Other";

const Prices = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
`;

export default ({ prices }) => {
  const bestOffer = prices[0];
  const other = prices.slice(1);

  return (
    <Prices>
      <BestOffer price={bestOffer.price} company={bestOffer.company} />
      {other.length > 0 && <Other prices={other} />}
    </Prices>
  );
};
