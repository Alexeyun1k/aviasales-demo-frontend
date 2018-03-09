import React from 'react';
import styled from 'styled-components';

import divider from './img/divider.png';
import fb from './img/fb.svg';
import vk from './img/vk.svg';
import twitter from './img/twitter.svg';
import rss from './img/rss.svg';

import queries from '../queries';

const Section = styled.section`
  padding-top: 0;
  padding-bottom: 24px;
  background: #ffffff;
`;

const Divider = styled.hr`
  display: block;
  border: none;
  background: url(${divider}) repeat-x;
  height: 7px;
  margin-bottom: 24px;

  @media (min-width: ${queries.xl}px) {
    margin-bottom: 32px;
  }
`;

const Head = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;

  @media (min-width: ${queries.xl}px) {
    text-align: left;
  }
`;

const Paragraph = styled.p`
  margin-top: 4px;
  margin-bottom: 8px;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;

  @media (min-width: ${queries.xl}px) {
    text-align: left;
  }
`;

const SocialsAndForm = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${queries.xl}px) {
    margin-top: 0;
    flex-direction: row;
  }
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -4px;

  @media (min-width: ${queries.xl}px) {
    display: inline-flex;
  }
`;

const Social = styled.a`
  display: block;
  margin: 0 4px;
`;

const Form = styled.form`
  min-width: 0;
  margin-top: 24px;
  display: flex;
  justify-content: center;

  @media (min-width: ${queries.xl}px) {
    margin-top: 0;
    margin-left: 16px;
    display: inline-flex;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  line-height: 20px;
  font-size: 16px;
  color: #5c5c5c;
  padding: 7px 0 7px 12px;
  background: #ffffff;
  border: 1px solid #a0b0b9;
  border-right: none;
  border-radius: 2px 0 0 2px;
  min-width: 0;
  transition: 0.3s ease-in-out;

  :focus {
    border: 1px solid #ff8e41;
    border-right: none;
    outline: none;
  }

  ::placeholder {
    color: #a0b0b9;
  }

  @media (min-width: ${queries.xl}px) {
    display: inline-flex;
  }
`;

const Button = styled.button`
  background: #ff8e41;
  border-radius: 0 2px 2px 0;
  border: none;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 8px 16px;
`;

export default () => (
  <Section>
    <Divider />
    <div className="container">
      <div className="row ">
        <div className="col-md-6 col-md-offset-3 col-xl-4 col-xl-offset-1">
          <Head>Хотите знать всё о скидках на авиабилеты?</Head>
          <Paragraph>
            Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.
          </Paragraph>
        </div>
        <div className="col-md-6 col-md-offset-3 col-xl-5 col-xl-offset-1">
          <SocialsAndForm>
            <Socials>
              <Social href="#">
                <img src={twitter} alt="Твиттер" />
              </Social>
              <Social href="#">
                <img src={fb} alt="Фейсбук" />
              </Social>
              <Social href="#">
                <img src={vk} alt="Вконтакте" />
              </Social>
              <Social href="#">
                <img src={rss} alt="РСС" />
              </Social>
            </Socials>
            <Form>
              <Input placeholder="Ваш email" />
              <Button>Подписаться</Button>
            </Form>
          </SocialsAndForm>
        </div>
      </div>
    </div>
  </Section>
);
