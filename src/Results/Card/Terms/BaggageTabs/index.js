import React from "react";
import styled from "styled-components";
import handbag from "./img/handbag.svg";
import baggage from "./img/baggage.svg";
import no_baggage from "./img/no-baggage.svg";

const BaggageTabs = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: center;
`;

const Baggage = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  opacity: ${props => (props.weight === -1 ? 0.4 : 1)};
  position: relative;
  background-image: url(${props => (props.weight ? baggage : no_baggage)});
  background-repeat: no-repeat;
  background-position: center;

  :after {
    content: ${props =>
      props.weight === -1
        ? '"?"'
        : props.weight ? '"' + props.weight + '"' : ""};
    position: absolute;
    left: 0;
    right: 0;
    top: 8px;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    font-size: 10px;
    text-align: center;
    letter-spacing: -0.4px;
    color: #9ab0b9;
  }
`;

const Handbag = Baggage.extend`
  background-image: url(${handbag});

  :after {
    top: 9px;
  }
`;

export default ({ terms }) => {
  return (
    <BaggageTabs>
      <Handbag weight={terms[0].handbag} />
      <Baggage weight={terms[0].baggage} />
    </BaggageTabs>
  );
};
