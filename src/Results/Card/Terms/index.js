import React from "react";
import styled from "styled-components";
import { media } from "../../../queries";

const Terms = styled.div`
  display: none;

  ${media.sm`
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-right: 1px solid #DDDDDD;
  `};
`;

export default ({ terms }) => {
  return <Terms>{terms[0].prices[0].price}</Terms>;
};
