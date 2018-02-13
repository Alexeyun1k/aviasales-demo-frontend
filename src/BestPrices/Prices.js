import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 24px;
`;

const Line = styled.a`
  margin-top: 16px;
  display: flex;
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
  color: #4a4a4a;
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  color: #00bae8;
`;

const Prices = props => {
  return (
    <Wrapper>
      <Line>
        <From>{props.data[0].from}</From>
        <Price>{props.data[0].price}</Price>
      </Line>

      <Line>
        <From>{props.data[1].from}</From>
        <Price>{props.data[1].price}</Price>
      </Line>

      <Line>
        <From>{props.data[2].from}</From>
        <Price>{props.data[2].price}</Price>
      </Line>

      <Line>
        <From>{props.data[3].from}</From>
        <Price>{props.data[3].price}</Price>
      </Line>

      <Line>
        <From>{props.data[4].from}</From>
        <Price>{props.data[4].price}</Price>
      </Line>
    </Wrapper>
  );
};

export default Prices;
