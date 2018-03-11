import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 12px;
  text-align: center;
  color: #00ace2;
`;

const Circle = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  padding: 13px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
`;

const Tab = props => (
  <Button>
    <Circle>
      <img src={props.img} alt="Иконка" />
    </Circle>
    {props.children}
  </Button>
);

Tab.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tab;
