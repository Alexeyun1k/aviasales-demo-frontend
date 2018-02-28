import React from "react";
import styled from "styled-components";
import clear from "./img/clear.svg";
import dropdown from "./img/dropdown.svg";

const Accordion = styled.div`
  border-bottom: 1px solid #ddd;
`;

const Head = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;

  :hover {
    background: #f1fcff;
  }
`;

const Icon = styled.img`
  position: relative;
  top: -2px;
  margin-right: 8px;
  transform: rotate(${props => (props.expanded ? "0deg" : "-90deg")});
  transition: 0.3s ease;
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin: 0;
  flex-grow: 1;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5b5b5c;
  cursor: pointer;
`;

const Num = styled.span`
  color: #a0b0b9;
  margin-left: 8px;
`;

const Reset = styled.button`
  background: transparent;
  padding: 0;
  border: none;
`;

const Content = styled.div`
  padding: 0 0 16px;
`;

export default class extends React.Component {
  state = {
    expanded: false,
    changed: false
  };

  toggle = e => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <Accordion>
        <Head>
          <Title onClick={this.toggle}>
            <Icon src={dropdown} expanded={this.state.expanded} />
            {this.props.title} <Num>{this.props.num}</Num>
          </Title>
          {this.state.changed && (
            <Reset>
              <img src={clear} alt="Очистить" />
            </Reset>
          )}
        </Head>
        {this.state.expanded && <Content>{this.props.children}</Content>}
      </Accordion>
    );
  }
}
