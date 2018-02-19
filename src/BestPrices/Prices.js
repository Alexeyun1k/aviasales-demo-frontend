import React from "react";
import styled from "styled-components";

const Prices = styled.div`
  margin-top: 16px;
`;

const Line = styled.a`
  padding: 8px 0;
  display: flex;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;

  :hover {
    background-color: #f1fcff;
  }
`;

const From = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  color: #4a4a4a;

  :hover {
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: right;
  text-decoration: none;
  color: #00bae8;

  :hover {
    color: #ff9d1b;
  }
`;

export default props => {
  return (
    <Prices>
      <Line href="#">
        <From>{props.data[0].from}</From>
        <Price>{props.data[0].price}</Price>
      </Line>

      <Line href="#">
        <From>{props.data[1].from}</From>
        <Price>{props.data[1].price}</Price>
      </Line>

      <Line href="#">
        <From>{props.data[2].from}</From>
        <Price>{props.data[2].price}</Price>
      </Line>

      <Line href="#">
        <From>{props.data[3].from}</From>
        <Price>{props.data[3].price}</Price>
      </Line>

      <Line href="#">
        <From>{props.data[4].from}</From>
        <Price>{props.data[4].price}</Price>
      </Line>
    </Prices>
  );
};
