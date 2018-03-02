import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import Switch from "./Switch";
import calendar from "./img/calendar.svg";
import queries from "../queries";
import DayPicker from "./DayPicker";

const DatePicker = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  padding: 16px 24px;
  z-index: 100;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const DropdownContentWithOutside = onClickOutside(DropdownContent);

const Button = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  padding: 18px 40px 18px 16px;
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  color: ${props => (props.isSet ? "#4a4a4a" : "#a0b0b9")};
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

export default class extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  handleDateClick = date => {
    this.toggleClose();
    this.props.onDateChange(date);
  };

  render() {
    const { dateFrom, dateTo } = this.props;
    const isSet = !!dateFrom;
    const buttonText = dateFrom
      ? format(dateFrom, "D MMMM, dd", { locale: ru })
      : "Туда";

    const calendarSettings = {
      dateFrom: dateFrom,
      dateTo: dateTo
    };

    return (
      <DatePicker>
        <Button onClick={this.toggleOpen} type="button" isSet={isSet}>
          {buttonText}
        </Button>
        {this.state.isOpen && (
          <DropdownContentWithOutside handleClickOutside={this.toggleClose}>
            <DayPicker
              data={calendarSettings}
              onDayClick={this.handleDateClick}
            />
            <Switch title="Показать цены в одну сторону" />
          </DropdownContentWithOutside>
        )}
      </DatePicker>
    );
  }
}
