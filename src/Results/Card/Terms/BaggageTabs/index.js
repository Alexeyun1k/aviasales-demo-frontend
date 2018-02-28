import React from "react";
import styled from "styled-components";
import BaggageIcon from "./BaggageIcon";

const BaggageTabs = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: center;
`;

export default ({ terms }) => {
  return (
    <BaggageTabs>
      <BaggageIcon weight={terms[0].handbag} type="handbag" />
      <BaggageIcon weight={terms[0].baggage} type="baggage" />
    </BaggageTabs>
  );
};
