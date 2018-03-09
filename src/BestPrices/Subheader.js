import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const City = styled.h3`
  margin: 0;
  font-weight: bold;
  line-height: 32px;
  font-size: 22px;
  text-align: left;
  color: #5b5b5c;
`;

const Direction = styled.p`
  margin-top: 2px;
  margin-bottom: 0;
  font-weight: 500;
  line-height: 20px;
  font-size: 12px;
  text-align: left;
  color: #a0b0b9;
`;

const Flag = styled.img`
  align-self: center;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
`;

const Header = styled.div`
  display: flex;
`;

const SubHeader = ({ data }) => (
  <Header>
    <Flag src={data.flag} />
    <div>
      <City>{data.city}</City>
      <Direction>{data.direction}</Direction>
    </div>
  </Header>
);

SubHeader.propTypes = {
  data: PropTypes.shape({
    flag: PropTypes.string,
    city: PropTypes.string,
    direction: PropTypes.string,
  }).isRequired,
};

export default SubHeader;
