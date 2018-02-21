import React from "react";
import styled from "styled-components";
import clock from "./img/clock.svg";
import plane_to from "./img/plane-to.svg";
import plane_from from "./img/plane-from.svg";

const Flight = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const Text = styled.p`
  margin: 0;
  line-height: 18px;
  font-size: 14px;
  color: #4a4a4a;
`;

const FromTo = Text.extend`
  margin-left: 4px;
  min-width: 112px;
`;

const Length = Text.extend`
  margin-left: 16px;
  flex-grow: 1;
`;

const Type = Text.extend`
  text-align: right;
`;

export default ({ type, departure, arrival, duration }) => {
  return (
    <Flight>
      <FromTo>
        <Icon src={type === "to" ? plane_to : plane_from} />
        {departure.time} — {arrival.time}
      </FromTo>
      <Length>
        <Icon src={clock} />
        {duration}
      </Length>
      <Type>Прямой</Type>
    </Flight>
  );
};
