import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

import checked from "./img/checked.svg";
import unchecked from "./img/unchecked.svg";

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheck = styled.input`
  opacity: 0;
  position: absolute;
`;

const Checkbox = styled.img`
  display: block;
  margin-right: 8px;

  ${HiddenCheck}:focus + & {
    transform: scale(1.2);
  }
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

export default class extends React.Component {
  state = {
    checked: false
  };

  toggleState = e => {
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
      <Label>
        <HiddenCheck type="checkbox" onChange={this.toggleState} />
        <Checkbox src={this.state.checked ? checked : unchecked} />
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
      </Label>
    );
  }
}
