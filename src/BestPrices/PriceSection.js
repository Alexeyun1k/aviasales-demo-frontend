import React from "react";
import Subheader from "./Subheader";
import Prices from "./Prices";

export default props => {
  return (
    <div>
      <Subheader data={props.data.head} />
      <Prices data={props.data.prices} />
    </div>
  );
};
