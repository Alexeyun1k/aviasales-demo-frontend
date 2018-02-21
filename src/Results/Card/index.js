import React from "react";
import styled from "styled-components";

import Badge from "./Badge";
import Segment from "./Segment";

const Card = styled.a`
  margin-left: -8px;
  margin-right: -8px;
  display: block;
  text-decoration: none;
  margin-top: 8px;
  background: #fff;
`;

const Info = styled.div`
  padding: 12px 8px 16px;
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
`;

const Logo = styled.img`
  height: 36px;
  min-width: 104px;
  border: none;
`;

const Text = styled.p`
  margin: 0;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
`;

export default ({ terms, flight, badge }) => {
  return (
    <Card>
      {badge && <Badge badgeType={badge} />}
      <Info>
        <PriceAndCompany>
          <Price>{terms[0].prices[0].price} ₽</Price>
          <Logo src={flight.airlines[0].logo} />
        </PriceAndCompany>

        {flight.segments.map(segment => (
          <Segment
            type={segment.type}
            departure={segment.departure}
            arrival={segment.arrival}
            duration={segment.duration}
          />
        ))}
      </Info>
    </Card>
  );
};
