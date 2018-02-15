import React from "react";
import styled from "styled-components";

import android from "./img/android.svg";
import windowsPhone from "./img/windows-phone.svg";
import apple from "./img/apple.svg";
import stars from "./img/rating.svg";
import phoneXS from "./img/phone-xs.png";
import phoneMD from "./img/phone-md.png";

const Container = styled.section`
  position: relative;
  padding-top: 16px;
  padding-bottom: 24px;
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Phone = styled.img`
  height: 213px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Head = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
`;

const Stars = styled.img`
  margin-right: 8px;
`;

const Text = styled.p`
  margin: 0;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppLink = styled.a`
  display: block;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 36px;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  background: url(${props => props.img}) no-repeat left;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <Phone src={phoneXS} />
        <Head>Скачай мобильное приложение Aviasales.ru</Head>
        <Rating>
          <Stars src={stars} />
          <Text>Более 103 000 оценок</Text>
        </Rating>
        <Links>
          <AppLink img={apple}>iPhone или iPad</AppLink>
          <AppLink img={android}>Android</AppLink>
          <AppLink img={windowsPhone}>Windows Phone</AppLink>
        </Links>
      </div>
    </Container>
  );
};
