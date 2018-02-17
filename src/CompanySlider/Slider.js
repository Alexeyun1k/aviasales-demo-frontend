import React from "react";
import styled from "styled-components";

import aeroflot from "./img/aeroflot.png";
import elivaline from "./img/elivaline.png";
import koreanAir from "./img/korean-air.png";
import oneTwoTrip from "./img/one-two-trip.png";
import s7 from "./img/s7.png";
import arrowLeft from "./img/arrow-left.svg";
import arrowRight from "./img/arrow-right.svg";

const Slider = styled.div`
  display: flex;
  margin: 0;
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  padding: 12px 0;
`;

const Logo = styled.img`
  max-height: 50px;
  margin: 16px 10px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  padding: 0;
  border: 1px solid #818181;
  border-radius: 50%;
  background: ${props => (props.active ? "#818181" : "white")};
  margin: 0 4px;
`;

export default props => {
  return (
    <div>
      <Slider>
        <Button>
          <img src={arrowLeft} alt="Назад" />
        </Button>
        <Content>
          <Logo src={aeroflot} />
          <Logo src={elivaline} />
          <Logo src={koreanAir} />
          <Logo src={oneTwoTrip} />
          <Logo src={s7} />
        </Content>
        <Button>
          <img src={arrowRight} alt="Вперёд" />
        </Button>
      </Slider>
      <Pagination>
        <Indicator active />
        <Indicator />
        <Indicator />
      </Pagination>
    </div>
  );
};
