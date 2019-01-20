import React from "react";
import styled from "styled-components";
import Card from "./Card/";
import Header from "../Header/";
import Filter from "./Filter/";
import { results } from "../FakeData";
import { media } from "../queries";

const Main = styled.main`
  position: relative;
  min-height: 300px;
  padding-bottom: 16px;
  padding-top: 16px;
  background: #eaeaea;
`;

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0;

  ${media.lg`
    margin-top: 40px;
  `};
`;

const FilterButton = styled.button`
  display: block;
  position: sticky;
  bottom: 8px;
  top: 8px;
  margin: auto;
  margin-top: 16px;
  border: none;
  padding: 10px 24px;
  background: #00ace2;
  border-radius: 100px;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  color: #ffffff;

  ${media.md`
    margin-top: 0px;
    margin-bottom: 16px;
  `};

  ${media.lg`
    display: none;
  `};
`;

const ToTop = styled.button`
  display: block;
  position: sticky;
  top: 8px;
  margin: auto;
  margin-bottom: 16px;
  border: none;
  padding: 6px 16px;
  background: #00ace2;
  opacity: 0.5;
  border-radius: 100px;
  font-weight: 900;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  ${media.md`
    display: none;
  `};
`;

const More = styled.button`
  display: block;
  width: 100%;
  margin-top: 16px;
  border: none;
  padding: 18px 32px;
  background: #00ace2;
  border-radius: 4px;
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export default function Results() {
  return (
    <div>
      <Header compact />
      <Main>
        <ToTop>Наверх</ToTop>
        <div className="container">
          <div className="row">
            <div className="hidden-xs hidden-sm hidden-md col-lg-4 col-xl-3">
              <Filter />
            </div>

            <div className="col-sm-12 col-lg-8 col-xl-7">
              <Cards>
                {results.map((card, index) => (
                  <Card
                    key={index}
                    badge={card.badge}
                    terms={card.terms}
                    flight={card.flight}
                  />
                ))}
                <More>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</More>
                <FilterButton className="first-md">Фильтровать</FilterButton>
              </Cards>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}
