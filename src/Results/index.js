import React from "react";
import styled from "styled-components";
import MobileCard from "./MobileCard/";
import FullCard from "./FullCard/";

const Section = styled.section`
  min-height: 300px;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #eaeaea;
`;

export default function Results() {
  return (
    <Section>
      <div className="hidden-md hidden-lg hidden-xl">
        <MobileCard />
        <MobileCard />
        <MobileCard />
      </div>
      <div className="hidden-xs hidden-sm col-md-12 col-lg-8 col-xl-7">
        <FullCard />
        <FullCard />
        <FullCard />
      </div>
    </Section>
  );
}
