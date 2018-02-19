import React from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import dropdown from "./img/dropdown.svg";

import rossia_full from "./companies/rossia-full.png";

const Card = styled.article`
  min-height: 200px;
  margin-top: 16px;
  background: #fff;
  border-radius: 4px;
  display: flex;
`;

const BaggageAndPrices = styled.div`
  border-right: 1px solid #dddddd;
`;

const BaggageTerms = styled.div`
  text-align: center;
`;

const Prices = styled.div`
  padding: 16px 24px;
`;

const FromCompany = styled.p`
  margin-top: 8px;
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const Info = styled.div`
  flex-grow: 1;
`;

const More = styled.button`
  border-radius: 0 4px 4px 0;
  padding: 0 4px;
  border: none;
  background: #edf5f7;
`;

export default function MobileCard() {
  return (
    <Card>
      <BaggageAndPrices>
        <BaggageTerms>Тут условия будут</BaggageTerms>
        <Prices>
          <BuyButton price="1234" />
          <FromCompany>на Clickavia</FromCompany>
        </Prices>
      </BaggageAndPrices>
      <Info>{}</Info>
      <More>
        <img src={dropdown} alt="Показать больше" />
      </More>
    </Card>
  );
}
