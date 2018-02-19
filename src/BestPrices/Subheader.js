import React from "react";
import styled from "styled-components";

const City = styled.h3`
  margin: 0;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  text-align: left;
  color: #5b5b5c;
`;

const Direction = styled.p`
  margin-top: 2px;
  margin-bottom: 0;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: left;
  color: #a0b0b9;
`;

const Flag = styled.img`
  align-self: center;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
`;

const SubHeader = styled.div`
  display: flex;
`;

export default props => {
  return (
    <SubHeader>
      <Flag src={props.data.flag} />
      <div>
        <City>{props.data.city}</City>
        <Direction>{props.data.direction}</Direction>
      </div>
    </SubHeader>
  );
};
