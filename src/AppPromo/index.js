import React from "react";
import styled from "styled-components";
import queries from "../queries";

import android from "./img/android.svg";
import windowsPhone from "./img/windows-phone.svg";
import apple from "./img/apple.svg";
import stars from "./img/rating.svg";
import phone_xs from "./img/phone-xs.png";

const Section = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

const Promo = styled.div`
  position: relative;
  min-height: 280px;
  padding-top: 24px;
  padding-bottom: 56px;

  @media (min-width: ${queries.md}px) {
    padding-top: 48px;
    padding-bottom: 56px;
  }
`;

const Phone = styled.img`
  height: 213px;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: ${queries.md}px) {
    height: 312px;
  }

  @media (min-width: ${queries.xl}px) {
    left: 9%;
  }
`;

const Head = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #ffffff;

  @media (min-width: ${queries.md}px) {
    line-height: 40px;
    font-size: 32px;
    text-align: left;
  }
`;

const Rating = styled.p`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 56px;
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;

  @media (min-width: ${queries.md}px) {
    text-align: left;
    margin-bottom: 40px;
  }
`;

const Stars = styled.img`
  margin-right: 8px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.md}px) {
    flex-direction: row;
  }
`;

const AppLink = styled.a`
  display: block;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 24px;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  @media (min-width: ${queries.md}px) {
    margin: 0 40px 0 0;
  }
`;

const Platform = styled.img`
  margin-right: 8px;
  vertical-align: middle;
`;

export default () => {
  return (
    <Section>
      <div className="container">
        <Promo>
          <Phone src={phone_xs} />
          <div className="row">
            <div className="col-xs-12 col-md-offset-4 col-md-8">
              <Head>Скачай мобильное приложение Aviasales.ru</Head>
              <Rating>
                <Stars src={stars} />Более 103 000 оценок
              </Rating>
            </div>
            <div className="col-xs-offset-6 col-xs-6 col-md-offset-4 col-md-8">
              <Links>
                <AppLink href="#">
                  <Platform src={apple} />iPhone или iPad
                </AppLink>
                <AppLink href="#">
                  <Platform src={android} />Android
                </AppLink>
                <AppLink href="#">
                  <Platform src={windowsPhone} />Windows Phone
                </AppLink>
              </Links>
            </div>
          </div>
        </Promo>
      </div>
    </Section>
  );
};
