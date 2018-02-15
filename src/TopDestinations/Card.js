import React from "react";
import styled from "styled-components";
import queries from "../queries";

const Container = styled.a`
  display: block;
  margin-top: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  border-radius: 8px;
  @media (min-width: ${queries.md}px) {
    margin-top: 24px;
  }
  @media (min-width: ${queries.xl}px) {
    margin-top: 32px;
  }
`;

const CityImg = styled.img`
  display: block;
  height: 128px;
  width: 100%;
  border: none;
  border-radius: 8px 8px 0 0;
  background-color: #eee;
  object-fit: cover;

  @media (min-width: ${queries.md}px) {
    height: 212px;
  }
`;

const Info = styled.div`
  display: flex;
  padding: 16px;
  @media (min-width: ${queries.md}px) {
    padding-top: 12px;
  }
  @media (min-width: ${queries.xl}px) {
    padding-right: 24px;
  }
`;

const Place = styled.div`
  flex-grow: 1;
  min-width: 0;
`;
const PriceAndDate = styled.div`
  margin-left: 8px;
`;

const City = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0 0 4px;
  text-align: left;
  line-height: 20px;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  color: #5b5b5c;

  @media (min-width: ${queries.md}px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0 0 4px;
  line-height: 20px;
  font-size: 14px;
  text-align: right;
  color: #00bae8;
  @media (min-width: ${queries.md}px) {
    line-height: 32px;
    font-size: 22px;
  }
`;

const Country = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0;
  text-align: left;
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

const Flag = styled.img`
  display: none;
  @media (min-width: ${queries.md}px) {
    align-self: center;
    display: block;
    margin-left: 8px;
    margin-right: 16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0.2px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 8px rgba(38, 38, 38, 0.1);
  }
`;

const Card = props => {
  return (
    <Container>
      <CityImg src={props.card.img} />
      <Info>
        <Flag src={props.card.flag} />
        <Place>
          <City>{props.card.city}</City>
          <Country>{props.card.country}</Country>
        </Place>
        <PriceAndDate>
          <Price>{props.card.price}</Price>
          <Departure>{props.card.departure}</Departure>
        </PriceAndDate>
      </Info>
    </Container>
  );
};

export default Card;
