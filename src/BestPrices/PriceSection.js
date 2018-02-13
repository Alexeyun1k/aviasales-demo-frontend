import React from "react";
import Subheader from "./Subheader";
import Prices from "./Prices";

const PriceSection = props => {
  return (
    <div>
      <Subheader data={props.data.head} />
      <Prices data={props.data.prices} />
    </div>
  );
};

export default PriceSection;
