import React from "react";
import styled from "styled-components";
import { media } from "../../queries";

import Badge from "./Badge";
import Info from "./Info/";
import Terms from "./Terms/";

import dropdown from "./dropdown.svg";

const Card = styled.a`
  margin-left: -8px;
  margin-right: -8px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-decoration: none;
  background: #fff;

  :first-child {
    margin-top: 0px;
  }

  ${media.md`
    margin-left: 0;
    margin-right: 0;
    margin-top: 20px;
    flex-direction: row;
    border-radius: 4px;

    :first-child {
      margin-top: 0px;
    }
  `};
`;

const More = styled.button`
  display: none;

  ${media.md`
    display: block;
    padding-left: 5px;
    padding-right: 5px;
    background: #EDF5F7;
    border: none;
    border-radius: 0 4px 4px 0;
  `};
`;

export default ({ terms, flight, badge }) => {
  const bestOffer = terms[0].prices[0];

  return (
    <Card>
      {badge && <Badge badgeType={badge} />}
      <Terms terms={terms} />
      <Info
        bestPrice={bestOffer.price}
        charter={flight.charter}
        airlines={flight.airlines}
        segments={flight.segments}
      />
      <More>
        <img src={dropdown} alt="Развернуть" />
      </More>
    </Card>
  );
};
