import React from "react";
import styled from "styled-components";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const RangeControl = styled.div`
  margin: 16px 16px 24px;
  padding-bottom: 4px;
  border-radius: 4px;
  background: #ffffff;
`;

const Title = styled.h5`
  margin: 12px 0 0;
  font-weight: 400;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
`;

const ValueRange = styled.div`
  display: flex;
  justify-content: space-between;
`;

const From = Title.extend`
  margin: 0 0 4px;
`;

const To = From.extend``;

const handleStyle = {
  background: "#fff",
  border: "1px solid #D6D9DA",
  borderRadius: 50
};

const trackStyle = {
  position: "relative",
  top: 3,
  height: 2,
  background: "#00ACDE"
};

const railStyle = {
  position: "relative",
  top: 5,
  height: 2,
  background: "#dddddd"
};

export default ({ title, from, to }) => {
  return (
    <RangeControl>
      <Title>{title}</Title>
      <ValueRange>
        <From>{from}</From>
        <To>{to}</To>
      </ValueRange>
      <Range
        defaultValue={[0, 100]}
        handleStyle={[handleStyle, handleStyle]}
        allowCross={false}
        trackStyle={[trackStyle]}
        railStyle={railStyle}
      />
    </RangeControl>
  );
};
