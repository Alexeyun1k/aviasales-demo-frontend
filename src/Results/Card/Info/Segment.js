import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";

import { media } from "../../../queries";
import clock from "./img/clock.svg";
import plane_to from "./img/plane-to.svg";
import plane_from from "./img/plane-from.svg";
import take_off from "./img/take-off.svg";
import landing from "./img/landing.svg";
import pin from "./img/pin.svg";

const Segment = styled.div`
  border-bottom: none;
  padding-bottom: 0;

  ${media.md`
    border-bottom: 1px dashed #dddddd;
    padding-bottom: 12px;
  `};

  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Compact = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.md`
    display: none;
  `};
`;

const Full = styled.div`
  margin-top: 12px;
  display: none;

  ${media.md`
    justify-content: space-between;
    align-items: center;
    display: flex;
  `};
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

const Arrival = styled.div`
  min-width: 104px;
  text-align: left;
`;

const Departure = styled.div`
  min-width: 88px;
  text-align: right;
`;

const Time = styled.p`
  margin: 0;
  line-height: 40px;
  font-size: 28px;
  color: #323333;
`;

const City = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const Day = City.extend`
  font-weight: 400;
`;

const Flight = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const DurationAndIcons = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Duration = Day.extend``;

const Scheme = DurationAndIcons.extend``;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #a0b0b9;
`;

const Line = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  flex-grow: 1;
  height: 1px;
  background: #a0b0b9;
`;

const Airports = DurationAndIcons.extend`
  padding-top: 12px;
`;

const Airport = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
`;

function formatDuration(min) {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  return (hours ? `${hours}ч` : "") + (minutes ? ` ${minutes}м` : "");
}

function getLocalDate(UNIXDate, offset) {
  const date = new Date(UNIXDate * 1000);
  const totalOffset = (offset + date.getTimezoneOffset()) * 60 * 1000;
  return new Date(+date + totalOffset);
}

function formatDate(date) {
  return format(date, "D MMM YYYY, dd", { locale: ru });
}

function formatTime(date) {
  return format(date, "HH:mm", { locale: ru });
}

export default ({ wayBack, departure, arrival, duration }) => {
  const localArrival = getLocalDate(arrival.date, arrival.offset);
  const localDeparture = getLocalDate(departure.date, departure.offset);

  const formattedDuration = formatDuration(duration);
  const formattedArrivalDate = formatDate(localArrival);
  const formattedDepartureDate = formatDate(localDeparture);
  const formattedArrivalTime = formatTime(localArrival);
  const formattedDepartureTime = formatTime(localDeparture);

  return (
    <Segment>
      <Compact>
        <FromTo>
          <Icon src={wayBack ? plane_from : plane_to} />
          {formattedDepartureTime} — {formattedArrivalTime}
        </FromTo>
        <Length>
          <Icon src={clock} />
          {formattedDuration}
        </Length>
        <Type>Прямой</Type>
      </Compact>

      <Full>
        <Arrival>
          <Time>
            <Icon src={pin} />
            {formattedArrivalTime}
          </Time>
          <City>{arrival.city}</City>
          <Day>{formattedArrivalDate}</Day>
        </Arrival>
        <Flight>
          <DurationAndIcons>
            <img src={take_off} alt="Взлёт" />
            <Duration>{formattedDuration}</Duration>
            <img src={landing} alt="Посадка" />
          </DurationAndIcons>
          <Scheme>
            <Circle />
            <Line />
            <Circle />
          </Scheme>
          <Airports>
            <Airport>{departure.airport}</Airport>
            <Airport>{arrival.airport}</Airport>
          </Airports>
        </Flight>
        <Departure>
          <Time>{formattedDepartureTime}</Time>
          <City>{departure.city}</City>
          <Day>{formattedDepartureDate}</Day>
        </Departure>
      </Full>
    </Segment>
  );
};
