import React from "react";
import styled from "styled-components";
import { FormattedNumber, FormattedDate } from "react-intl";

import { media } from "../../../queries";

import Segment from "./Segment";
import share from "./img/share.svg";

const Info = styled.div`
  padding: 12px 8px 16px;
  flex-grow: 1;

  ${media.md`
    padding: 16px;
  `};
`;

const PriceAndCompany = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.h2`
  margin: 0;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;

  ${media.md`
    display: none;
  `};
`;

const Logo = styled.img`
  height: 36px;
  margin-left: 12px;
  border: ${props => (props.shortLogos ? "1px solid #dddddd" : "none")};
  border-radius: ${props => (props.shortLogos ? "4px" : "0")};
  padding: ${props => (props.shortLogos ? "3px" : "0")};

  :first-child {
    margin-left: 0;
  }
`;

const Labels = styled.div`
  display: none;

  ${media.md`
    display: flex;
    align-items: center;
  `};
`;

const Charter = styled.div`
  border: 1px solid #2196f3;
  border-radius: 15px;
  background: transparent;
  padding: 4px 12px;
  line-height: 18px;
  font-size: 10px;
  color: #23a9f6;
`;

const Share = styled.button`
  margin-left: 12px;
  border: none;
  background: transparent;
  padding: 0px;
`;

export default ({ charter, airlines, segments, bestPrice }) => {
  const shortLogos = airlines.length > 1 ? true : false;

  return (
    <Info>
      <PriceAndCompany>
        <Price>
          <FormattedNumber
            value={bestPrice}
            style="currency"
            currency="rub"
            minimumFractionDigits={0}
            maximumFractionDigits={2}
          />
        </Price>
        <div>
          {airlines.map(airline => (
            <Logo
              shortLogos={shortLogos}
              src={shortLogos ? airline.shortLogo : airline.logo}
              alt={airline.name}
            />
          ))}
        </div>
        <Labels>
          {charter && <Charter>ЧАРТЕР</Charter>}
          <Share>
            <img src={share} alt="Поделиться" />
          </Share>
        </Labels>
      </PriceAndCompany>

      {segments.map(segment => (
        <Segment
          wayBack={segment.wayBack}
          departure={segment.departure}
          arrival={segment.arrival}
          duration={segment.duration}
        />
      ))}
    </Info>
  );
};
