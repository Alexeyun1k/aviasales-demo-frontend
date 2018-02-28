import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const BaggageTabs = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: center;
`;

export default ({ terms }) => {
  return (
    <BaggageTabs>
      <Icon weight={terms[0].handbag} type="handbag" />
      <Icon weight={terms[0].baggage} type="baggage" />
    </BaggageTabs>
  );
};
