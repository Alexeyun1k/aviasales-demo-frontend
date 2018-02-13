import React from "react";
import styled from "styled-components";

const CardWrap = styled.a`
  margin-top: 12px;
  display: block;
  background-color: #fff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
`;

const CityImg = styled.img`
  display: block;
  height: 128px;
  width: 100%;
  border: none;
  border-radius: 8px 8px 0 0;
  background-color: #eee;
  object-fit: cover;
`;

const InfoGroup = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  display: flex;
`;

const City = styled.h4`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0 0 4px;
  line-height: 20px;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;

  color: #5b5b5c;
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0 0 4px;
  line-height: 20px;
  font-size: 14px;
  text-align: right;
  color: #00bae8;
`;

const Country = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  color: #a0b0b9;
`;

const Departure = styled.p`
  white-space: nowrap;
  margin: 0;
  line-height: 20px;
  font-weight: 500;
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

const Card = props => {
  return (
    <CardWrap>
      <CityImg src={props.card.img} />
      <InfoGroup>
        <Line>
          <City>{props.card.city}</City>
          <Price>{props.card.price}</Price>
        </Line>
        <Line>
          <Country>{props.card.country}</Country>
          <Departure>{props.card.departure}</Departure>
        </Line>
      </InfoGroup>
    </CardWrap>
  );
};

export default Card;
