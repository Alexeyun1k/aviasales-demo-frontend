import React from "react";
import styled from "styled-components";
import clock from "./img/clock.svg";
import plane_to from "./img/plane-to.svg";
import plane_from from "./img/plane-from.svg";

import rossia_full from "./companies/rossia-full.png";

const Card = styled.article`
  margin-top: 8px;
  padding-top: 0;
  padding-bottom: 16px;
  background: #fff;
`;

const BadgeCheap = styled.aside`
  margin: 0;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: #83d40b;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const PriceAndCompany = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.h2`
  margin: 0;
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const Logo = styled.img`
  height: 36px;
  min-width: 104px;
  border: none;
`;

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

export default function MobileCard() {
  return (
    <Card>
      <BadgeCheap>
        <div className="container">
          Самый дешевый{" "}
          <span role="img" aria-label="emoji">
            🤑
          </span>
        </div>
      </BadgeCheap>
      <div className="container">
        <PriceAndCompany>
          <Price>7 712 ₽</Price>
          <Logo src={rossia_full} />
        </PriceAndCompany>

        <Flight>
          <FromTo>
            <Icon src={plane_to} />00:05 — 03:05
          </FromTo>
          <Length>
            <Icon src={clock} />5 ч
          </Length>
          <Type>Прямой</Type>
        </Flight>

        <Flight>
          <FromTo>
            <Icon src={plane_from} />10:35 — 17:10
          </FromTo>
          <Length>
            <Icon src={clock} />4 ч 35 м
          </Length>
          <Type>Прямой</Type>
        </Flight>
      </div>
    </Card>
  );
}
