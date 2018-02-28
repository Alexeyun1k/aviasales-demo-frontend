import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "./calendar.css";

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

const prices = {
  26: "23 908",
  28: "3 975"
};

function renderDay(day, mod) {
  const date = day.getDate();

  return (
    <div className="day">
      <div className="day--date">{day.getDate()}</div>
      {prices[date] && <aside className="day--price">{prices[date]}</aside>}
    </div>
  );
}

export default class extends React.Component {
  handleDateClick = (date, { disabled }) => {
    if (!disabled) {
      this.props.onDayClick(new Date(date));
    }
  };

  render() {
    const { dateFrom, dateTo } = this.props.data;

    return (
      <DayPicker
        locale="ru"
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        firstDayOfWeek={1}
        disabledDays={{ before: new Date() }}
        fromMonth={new Date()}
        selectedDays={dateFrom}
        renderDay={renderDay}
        initialMonth={dateFrom || new Date()}
        onDayClick={this.handleDateClick}
      />
    );
  }
}
