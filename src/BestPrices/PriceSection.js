import React from 'react';
import PropTypes from 'prop-types';
import Subheader from './Subheader';
import Prices from './Prices';

const PriceSection = props => (
  <div>
    <Subheader data={props.data.head} />
    <Prices data={props.data.prices} />
  </div>
);

PriceSection.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.shape({
      flag: PropTypes.string,
      city: PropTypes.string,
      direction: PropTypes.string,
    }),
    prices: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.string,
      price: PropTypes.number,
    })),
  }).isRequired,
};

export default PriceSection;
