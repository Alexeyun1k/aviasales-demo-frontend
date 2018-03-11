import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import queries from '../queries';
import { cities } from '../FakeData/cities';

const City = styled.div`
  display: flex;
  background: #ffffff;
  position: relative;

  @media (min-width: ${queries.md}px) {
    border-radius: 0 4px 0 0;
  }

  @media (min-width: ${queries.xl}px) {
    border-radius: 0;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  padding: 18px 48px 18px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;

  ::placeholder {
    color: #a0b0b9;
  }

  :focus {
    outline: 2px solid #fd8a27;
    outline-offset: 0px;
  }
`;

const Name = styled.div`
  position: absolute;
  right: 0;
  padding: 18px 16px 18px 0;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #a0b0b9;
`;

export default class CityTo extends React.Component {
  restoreDefault = (e) => {
    e.target.value = cities[this.props.city] ? cities[this.props.city].city_name : '';
  };

  render() {
    const cityName = cities[this.props.city] ? cities[this.props.city].city_name : '';
    const cityCode = cities[this.props.city] ? cities[this.props.city].city_code : '';

    return (
      <City>
        <Input placeholder="Город прибытия" defaultValue={cityName} onBlur={this.restoreDefault} />
        <Name>{cityCode}</Name>
      </City>
    );
  }
}

CityTo.propTypes = {
  city: PropTypes.string,
};

CityTo.defaultProps = {
  city: '',
};
