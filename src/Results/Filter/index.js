import React from "react";
import styled from "styled-components";

import Accordion from "./Accordion/";
import Checkbox from "./Checkbox/";
import clear from "./clear.svg";

const Filter = styled.section`
  margin-top: 56px;
  border-radius: 4px;
  background: #ffffff;
`;

const SubTitle = styled.h4`
  margin: 16px 16px 8px;
  font-weight: bold;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
`;

const Text = styled.p`
  margin: 4px 16px 24px;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
`;

const Reset = styled.button`
  width: 100%;
  background-color: transparent;
  background: url(${clear}) no-repeat right 16px center;
  border: none;
  border-radius: 0 0 4px 4px;
  padding: 16px;
  line-height: 18px;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
  color: #00bde4;
  cursor: pointer;

  :hover {
    background-color: #f1fcff;
  }
`;

export default function Results() {
  return (
    <Filter>
      <Accordion title="ПЕРЕСАДКИ" expanded>
        <Checkbox title="Все" price="21034" checked />
        <Checkbox title="Без пересадок" price="7034" />
        <Checkbox title="1 пересадка" price="11457" />
        <Checkbox title="2 пересадки" price="21034" />
        <Checkbox title="3 пересадки" price="16030" />
      </Accordion>
      <Accordion title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ">ToDo</Accordion>
      <Accordion title="Багаж">ToDo</Accordion>
      <Accordion title="Время в пути">ToDo</Accordion>
      <Accordion title="Авиакомпании" num="32" expanded changed>
        <Checkbox title="Несколько авиакомпаний" />
        <Text>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </Text>
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
      </Accordion>
      <Reset>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</Reset>
    </Filter>
  );
}
