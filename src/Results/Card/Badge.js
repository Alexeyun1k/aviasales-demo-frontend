import React from "react";
import styled from "styled-components";
import { media } from "../../queries";

const Badge = styled.aside`
  flex-basis: 100%;
  margin: 0;
  padding: 8px;
  font-weight: 900;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  background: ${props => props.color};

  ${media.md`
    display: none;
  `};
`;

const Emoji = styled.span`
  margin-left: 8px;
`;

const types = {
  cheapest: {
    text: "Самый дешевый",
    color: "#83d40b",
    emoji: "🤑"
  },
  fastest: {
    text: "Самый быстрый",
    color: "#AF7542",
    emoji: "⚡️"
  },
  best: {
    text: "Самый лучший",
    color: "#C279D1",
    emoji: "😍"
  }
};

export default ({ badgeType }) => {
  return (
    <Badge color={types[badgeType].color}>
      {types[badgeType].text}
      <Emoji role="img" aria-label="emoji">
        {types[badgeType].emoji}
      </Emoji>
    </Badge>
  );
};
