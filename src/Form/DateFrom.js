import React from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import calendar from "./img/calendar.svg";
// import DropdownContent from "./DropdownContent";
import queries from "../queries";

const DatePicker = styled.div`
  position: relative;
`;

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const DropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 100;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const DropdownContentWithOutside = onClickOutside(DropdownContent);

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

export default class extends React.Component {
  state = {
    isOpen: true
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  toggleClose = () => {
    this.setState({ isOpen: false });
  };

  handleDateChange = date => {
    this.toggleClose();
    this.props.handleChanges({ ...this.props.data, ...{ date: date } });
  };

  render() {
    return (
      <DatePicker>
        <Button onClick={this.toggleOpen} type="button">
          {this.props.data.date
            ? format(this.props.data.date, "D MMMM, dd", {
                locale: ruLocale
              })
            : "Туда"}
        </Button>
        {this.state.isOpen && (
          <DropdownContentWithOutside handleClickOutside={this.toggleClose}>
            <DayPicker
              locale="ru"
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              onDayClick={this.handleDateChange}
            />
          </DropdownContentWithOutside>
        )}
      </DatePicker>
    );
  }
}
