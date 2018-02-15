import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  margin-top: 12px;
`;

const Head = styled.div`
  display: flex;
  margin: 0;
  padding: 12px 16px;
  background-color: #cd2027;
`;

const HeadText = styled.h3`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin: 0;
  padding: 9px 0;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
`;

const HeadLogo = styled.img`
  margin-left: 16px;
`;

const Infoblock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 208px;
  background-color: #fff;
  padding: 16px 8px;
`;

const PriceAndLogo = styled.div`
  display: flex;
`;

const Logo = styled.img`
  max-width: 100%;
  align-self: center;
  object-fit: contain;
  min-width: 0;
`;

const PriceBlock = styled.div`
  flex-grow: 1;
  margin-left: 8px;
  margin-right: 8px;
`;

const Price = styled.p`
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
  margin-top: 0;
  margin-bottom: 10px;

  &:before {
    content: "от";
    line-height: 16px;
    font-size: 12px;
    color: #5c5c5c;
    margin-right: 4px;
  }
`;

const DaysLeft = styled.p`
  white-space: nowrap;
  margin: 0;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
`;

const Info = styled.p`
  margin-top: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #242424;
`;

const Button = styled.a`
  display: block;
  margin-top: auto;
  padding: 10px 14px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  border: 2px solid #cd1f27;
  border-radius: 3px;
`;

const Offer = props => {
  return (
    <Wrapper>
      <Head>
        <HeadText>{props.data.head}</HeadText>
        <HeadLogo src={props.data.headLogo} />
      </Head>
      <Infoblock>
        <PriceAndLogo>
          <Logo src={props.data.airLogo} />
          <PriceBlock>
            <Price>{props.data.price}</Price>
            <DaysLeft>{props.data.daysLeft}</DaysLeft>
          </PriceBlock>
        </PriceAndLogo>
        <Info>{props.data.info}</Info>
        <Button>Узнать подробности</Button>
      </Infoblock>
    </Wrapper>
  );
};

export default Offer;
