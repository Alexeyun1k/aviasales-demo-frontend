import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Calendar from 'react-day-picker';
import { FormattedNumber } from 'react-intl';
import './calendar.css';

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const WEEKDAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const Day = styled.div`
  min-width: 48px;
  min-height: 48px;
`;

const DateCell = styled.div`
  position: relative;
  z-index: 10;
  padding: 8px 0 0;
`;

const Price = styled.aside`
  position: relative;
  z-index: 100;
  font-weight: 500;
  line-height: 20px;
  font-size: 10px;
  text-align: center;
  color: #00c455;
`;

const prices = {
  26: 23908,
  28: 3975,
};

function renderDay(day) {
  const date = day.getDate();

  return (
    <Day>
      <DateCell>{day.getDate()}</DateCell>
      {prices[date] && (
        <Price>
          <FormattedNumber
            value={prices[date]}
            minimumFractionDigits={0}
            maximumFractionDigits={2}
          />
        </Price>
      )}
    </Day>
  );
}

class DayPicker extends React.Component {
  handleDateClick = (date, { disabled }) => {
    if (!disabled) {
      this.props.onDayClick(new Date(date));
    }
  };

  render() {
    const { dateFrom } = this.props.data;

    return (
      <Calendar
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

DayPicker.propTypes = {
  data: PropTypes.shape({
    dateFrom: PropTypes.instanceOf(Date),
    dateTo: PropTypes.instanceOf(Date),
  }).isRequired,
  onDayClick: PropTypes.func.isRequired,
};

export default DayPicker;
