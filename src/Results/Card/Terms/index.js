import React from "react";
import styled from "styled-components";
import { media } from "../../../queries";
import Prices from "./Prices/";
import BaggageTabs from "./BaggageTabs/";

const Terms = styled.div`
  display: none;

  ${media.md`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    border-right: 1px solid #DDDDDD;
  `};
`;

export default ({ terms }) => {
  return (
    <Terms>
      <BaggageTabs terms={terms} />
      <Prices prices={terms[0].prices} />
    </Terms>
  );
};
