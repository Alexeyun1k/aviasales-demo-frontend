import React from "react";
import styled from "styled-components";

import Accordion from "./Accordion/";
import Checkbox from "./Checkbox/";
import RangeFilter from "./RangeFilter/";
import clear from "./clear.svg";
import plane from "./plane.svg";

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

const Plane = styled.img`
  position: relative;
  margin: 0px 8px;
  vertical-align: middle;
  top: -1px;
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

export default () => {
  return (
    <Filter>
      <Accordion title="ПЕРЕСАДКИ" expanded>
        <Checkbox title="Все" price="21034" checked />
        <Checkbox title="Без пересадок" price="7034" />
        <Checkbox title="1 пересадка" price="11457" />
        <Checkbox title="2 пересадки" price="21034" />
        <Checkbox title="3 пересадки" price="16030" />
      </Accordion>
      <Accordion title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" expanded>
        <SubTitle>
          Москва<Plane src={plane} />Барселона
        </SubTitle>
        <RangeFilter
          title="Вылет из Москвы:"
          from="c 03:05, 24 фев"
          to="до 13:50, 26 фев"
        />
        <RangeFilter
          title="Прибытие в Барселону:"
          from="c 03:05, 24 фев"
          to="до 13:50, 26 фев"
        />
        <SubTitle>
          Барселона<Plane src={plane} />Москва
        </SubTitle>
        <RangeFilter
          title="Вылет из Барселоны:"
          from="c 03:05, 24 фев"
          to="до 13:50, 26 фев"
        />
        <RangeFilter
          title="Прибытие в Москву:"
          from="c 03:05, 24 фев"
          to="до 13:50, 26 фев"
        />
      </Accordion>
      <Accordion title="Багаж" />
      <Accordion title="Время в пути" />
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
};
