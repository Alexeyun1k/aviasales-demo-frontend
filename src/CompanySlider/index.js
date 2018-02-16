import React from "react";
import styled from "styled-components";

import Slider from "./Slider";
import queries from "../queries";

const Container = styled.section`
  padding-top: 24px;
  padding-bottom: 32px;
  background: #ffffff;
`;

const Head = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row center-md">
          <div className="col-md-10">
            <Head>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Head>
            <Slider />
          </div>
        </div>
      </div>
    </Container>
  );
};
