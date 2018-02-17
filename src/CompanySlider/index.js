import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Head = styled.h2`
  margin-top: 24px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
`;

export default () => {
  return (
    <section className="container">
      <div className="row center-md">
        <div className="col-md-10">
          <Head>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Head>
          <Slider />
        </div>
      </div>
    </section>
  );
};
