import React from "react";
import styled from "styled-components";
import Card from "./Card/";
import Header from "./Header/";
import Filter from "./Filter/";
import { results } from "../FakeData";
import { media } from "../queries";

const Page = styled.div`
  min-height: 300px;
  padding-bottom: 40px;
  background: #eaeaea;
`;

const FilterButton = styled.button`
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  padding: 10px 24px;
  background: #00ace2;
  border-radius: 100px;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const ToTop = styled.button`
  display: block;
  margin: 16px auto;
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

export default function Results() {
  return (
    <Page>
      <Header />

      <ToTop>Наверх</ToTop>
      <div class="container">
        <div class="row">
          <div class="hidden-xs hidden-sm hidden-md col-lg-4 col-xl-3">
            <Filter />
          </div>

          <div class="col-sm-12 col-lg-8 col-xl-7">
            {results.map(card => (
              <Card
                badge={card.badge}
                terms={card.terms}
                flight={card.flight}
              />
            ))}
          </div>
        </div>
        <FilterButton>Фильтровать</FilterButton>
      </div>
    </Page>
  );
}
