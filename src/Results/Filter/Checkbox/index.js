import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

import checked from "./img/checked.svg";
import unchecked from "./img/unchecked.svg";

const Line = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Check = styled.img`
  display: block;
  margin-right: 8px;
  transform: rotate(${props => (props.collapsed ? "-90deg" : "0deg")});
  transition: 0.3s ease;
`;

const Title = styled.p`
  margin: 0;
  flex-grow: 1;
  line-height: 36px;
  font-size: 12px;
  color: #4a4a4a;
`;

const Price = styled.aside`
  margin-left: auto;
  line-height: 36px;
  font-size: 12px;
  color: #a0b0b9;
`;

class Checkbox extends React.Component {
  state = {
    checked: false
  };

  toggle = e => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  componentDidMount() {
    const { checked } = this.props;
    this.setState({ checked: checked });
  }

  render() {
    return (
      <Line onClick={this.toggle}>
        <Check src={this.state.checked ? checked : unchecked} />
        <Title>{this.props.title}</Title>
        {this.props.price && (
          <Price>
            <FormattedNumber
              value={this.props.price}
              style="currency"
              currency="rub"
              minimumFractionDigits="0"
              maximumFractionDigits="2"
            />
          </Price>
        )}
      </Line>
    );
  }
}

export default Checkbox;
