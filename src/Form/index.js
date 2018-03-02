import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CityFrom from "./CityFrom";
import CityTo from "./CityTo";
import DateFrom from "./DateFrom";
import DateTo from "./DateTo";
import Passangers from "./Passangers";
import queries from "../queries";
import plane from "./img/plane.svg";

const Form = styled.form`
  display: ${props => (props.compact ? "none" : "flex")};
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: -2px;

  @media (min-width: ${queries.md}px) {
    display: flex;
  }
`;

const Column = styled.div`
  min-width: 0;
  padding: 2px 1px 0;
  flex-basis: 100%;
`;

const CityPicker = Column.extend`
  @media (min-width: ${queries.md}px) {
    flex-basis: 50%;
  }

  @media (min-width: ${queries.xl}px) {
    flex-basis: ${props => (props.compact ? "18%" : "24%")};
  }
`;

const DatePicker = Column.extend`
  flex-basis: 50%;

  @media (min-width: ${queries.md}px) {
    flex-basis: 25%;
  }

  @media (min-width: ${queries.xl}px) {
    flex-basis: ${props => (props.compact ? "14%" : "16%")};
  }
`;

const OptionsPicker = Column.extend`
  @media (min-width: ${queries.md}px) {
    flex-basis: ${props => (props.compact ? "25%" : "50%")};
  }

  @media (min-width: ${queries.xl}px) {
    flex-basis: ${props => (props.compact ? "17%" : "20%")};
  }
`;

const ButtonSize = Column.extend`
  @media (min-width: ${queries.md}px) {
    flex-basis: ${props => (props.compact ? "25%" : "100%")};
  }

  @media (min-width: ${queries.xl}px) {
    flex-basis: ${props => (props.compact ? "16%" : "100%")};
    flex-grow: 1;
    padding-left: ${props => (props.compact ? "8px" : "")};
  }
`;

const Button = styled(Link)`
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;

  padding: 14px 48px;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  background-color: #ff9241;
  text-decoration: none;
  text-align: center;

  @media (min-width: ${queries.md}px) {
    width: ${props => (props.compact ? "100%" : "fit-content")};
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: ${props => (props.compact ? "16px" : "48px")};
    padding-right: ${props => (props.compact ? "16px" : "48px")};
    font-weight: 900;
    font-size: ${props => (props.compact ? "20px" : "28px")};
    margin-top: ${props => (props.compact ? "0" : "32px")};
    border-radius: ${props => (props.compact ? "0 0 4px 0" : "4px")};
  }

  @media (min-width: ${queries.xl}px) {
    margin-top: ${props => (props.compact ? "0" : "48px")};
    border-radius: 4px;
  }
`;

const Icon = styled.img`
  margin-left: 16px;
  position: relative;
  top: 3px;
`;

class SearchForm extends React.Component {
  state = {
    origin: "LED",
    destination: undefined,
    dateFrom: new Date(),
    dateTo: undefined,
    adults: 1,
    children: 0,
    infants: 0,
    isBusiness: false
  };

  handleChanges = id => newValue => {
    this.setState({ [id]: newValue });
  };

  switchCities = () => {
    this.setState(prevState => ({
      origin: prevState.destination,
      destination: prevState.origin
    }));
  };

  render() {
    return (
      <Form compact={this.props.compact}>
        <CityPicker compact={this.props.compact}>
          <CityFrom
            city={this.state.origin}
            switchCities={this.switchCities}
            onCityChange={this.handleChanges("origin")}
          />
        </CityPicker>

        <CityPicker compact={this.props.compact}>
          <CityTo
            city={this.state.destination}
            onCityChange={this.handleChanges("destination")}
          />
        </CityPicker>

        <DatePicker compact={this.props.compact}>
          <DateFrom
            dateFrom={this.state.dateFrom}
            dateTo={this.state.dateTo}
            onDateChange={this.handleChanges("dateFrom")}
          />
        </DatePicker>

        <DatePicker>
          <DateTo
            dateFrom={this.state.dateFrom}
            dateTo={this.state.dateTo}
            onDateChange={this.handleChanges("dateTo")}
          />
        </DatePicker>

        <OptionsPicker compact={this.props.compact}>
          <Passangers
            compact={this.props.compact}
            data={this.state}
            onAdultsChange={this.handleChanges("adults")}
            onBabiesChange={this.handleChanges("infants")}
            onChildrenChange={this.handleChanges("children")}
            onBusinessChange={this.handleChanges("business")}
          />
        </OptionsPicker>

        <ButtonSize compact={this.props.compact}>
          <Button to="/results" compact={this.props.compact}>
            Найти билеты
            {!this.props.compact && <Icon src={plane} />}
          </Button>
        </ButtonSize>
      </Form>
    );
  }
}

export default SearchForm;
