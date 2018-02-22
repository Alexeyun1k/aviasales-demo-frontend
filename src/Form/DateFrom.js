import React from "react";
import styled from "styled-components";
import Calendar from "react-day-picker";
import "react-day-picker/lib/style.css";

import calendar from "./img/calendar.svg";
import queries from "../queries";

const DatePicker = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  padding: 18px 0 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  border: none;
  background: url(${calendar}) no-repeat center right 16px;
  background-color: #ffffff;

  :focus {
    outline: 2px solid #fd8a27;
    outline-offset: 0px;
  }

  @media (min-width: ${queries.md}px) {
    border-radius: 0 0 0 4px;
  }

  @media (min-width: ${queries.xl}px) {
    border-radius: 0;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

export default class DateFrom extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <DatePicker>
        <Button
          onClick={this.toggleOpen}
          type="button"
          onBlur={this.toggleClose}
        >
          Туда
        </Button>
        {this.state.isOpen && (
          <Dropdown>
            <Calendar />
          </Dropdown>
        )}
      </DatePicker>
    );
  }
}
