import React from "react";
import styled from "styled-components";

const HiddenCheck = styled.input`
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  padding: 16px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.div`
  position: relative;
  display: block;
  margin-right: 16px;
  width: 40px;
  height: 24px;
  background: ${props => (props.checked ? "#ff9241" : "#bccdd6")};
  border-radius: 100px;
  transition: 0.3s ease-in-out;

  :after {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    transform: translateX(${props => (props.checked ? "16px" : "0")});
    transition: 0.3s ease-in-out;
  }
`;

const Title = styled.p`
  margin: 0;
  flex-grow: 1;
  text-align: left;
  line-height: 18px;
  font-size: 12px;
  color: #4a4a4a;
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
        <Checkbox checked={this.state.checked} />
        <Title>{this.props.title}</Title>
      </Label>
    );
  }
}
