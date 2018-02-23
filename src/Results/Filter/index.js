import React from "react";
import styled from "styled-components";

import Segment from "./Segment/";
import Checkbox from "./Checkbox/";

const Filter = styled.section`
  margin-top: 56px;
  border-radius: 4px;
`;

const SubTitle = styled.h4`
  margin: 16px 0 8px;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
`;

export default function Results() {
  return (
    <Filter>
      <Segment title="ПЕРЕСАДКИ" expanded>
        <Checkbox title="Все" price="21034" checked />
        <Checkbox title="Без пересадок" price="7034" />
        <Checkbox title="1 пересадка" price="11457" />
        <Checkbox title="2 пересадки" price="21034" />
        <Checkbox title="3 пересадки" price="16030" />
      </Segment>
      <Segment title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ">ToDo</Segment>
      <Segment title="Багаж">ToDo</Segment>
      <Segment title="Время в пути">ToDo</Segment>
      <Segment title="Авиакомпании" num="32" expanded changed>
        <Checkbox title="Несколько авиакомпаний" />
        <SubTitle>Альянсы</SubTitle>
        <Checkbox title="Все" checked />
        <Checkbox title="Star Alliance" checked />
        <Checkbox title="OneWorld" checked />
        <Checkbox title="SkyTeam" />
        <SubTitle>Авиакомпании</SubTitle>
        <Checkbox title="Все" checked />
        <Checkbox title="Aegean Airlines" checked />
        <Checkbox title="Air Algerie" checked />
        <Checkbox title="OneWorld" checked />
        <Checkbox title="SkyTeam" checked />
        <Checkbox title="Aegean Airlines" checked />
        <Checkbox title="Air Algerie" checked />
        <Checkbox title="OneWorld" checked />
        <Checkbox title="SkyTeam" checked />
      </Segment>
    </Filter>
  );
}
