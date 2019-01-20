import React from "react";
import styled from "styled-components";
import handbag from "./img/handbag.svg";
import baggage from "./img/baggage.svg";
import no_baggage from "./img/no-baggage.svg";

const Baggage = styled.div`
  display: inline-block;
  position: relative;
`;

const Img = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  opacity: ${props => (props.inactive ? 0.4 : 1)};
  object-fit: scale-down;
`;

const Weight = styled.figure`
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  top: ${props => (props.type === "baggage" ? "8px" : "9px")};
  font-weight: bold;
  line-height: normal;
  text-align: center;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #9ab0b9;
`;

const icons = {
  baggage: {
    enabled: baggage,
    disabled: no_baggage
  },
  handbag: {
    enabled: handbag,
    disabled: handbag // no icon in design
  }
};

export default ({ weight, type }) => {
  const inactive = weight === -1;

  const iconType = weight === 0 ? "disabled" : "enabled";
  const icon = icons[type][iconType];

  return (
    <Baggage>
      <Img src={icon} inactive={inactive} />
      {weight !== 0 && (
        <Weight type={type}>{weight === -1 ? "?" : weight}</Weight>
      )}
    </Baggage>
  );
};
