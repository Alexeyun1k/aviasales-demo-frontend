import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const PriceList = styled.div`
  margin-top: 16px;
`;

const Line = styled.a`
  padding: 8px 0;
  display: flex;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;

  :hover {
    background-color: #f1fcff;
  }
`;

const From = styled.p`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  color: #4a4a4a;

  :hover {
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

const Price = styled.p`
  white-space: nowrap;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  text-align: right;
  text-decoration: none;
  color: #00bae8;

  :hover {
    color: #ff9d1b;
  }
`;

const Prices = ({ data }) => (
  <PriceList>
    {data.map(({ from, price }) => (
      <Line href="#" key={from}>
        <From>{from}</From>
        <Price>
          от&nbsp;
          <FormattedNumber
            value={price}
            style={String('currency')}
            currency="rub"
            minimumFractionDigits={0}
            maximumFractionDigits={2}
          />
        </Price>
      </Line>
    ))}
  </PriceList>
);

Prices.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default Prices;
