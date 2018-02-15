import React from "react";
import styled from "styled-components";

import plane from "./img/plane.png";
import email from "./img/email.png";
import list from "./img/list.png";

const Container = styled.section`
  padding-top: 4px;
  padding-bottom: 24px;
  background: #fff;
`;

const HeadWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const Icon = styled.div`
  width: 26px;
  background: ${props => `url(${props.background}) no-repeat center left`};
`;

const Head = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 18px;
  text-align: left;
  font-size: 13px;
  color: #4a4a4a;
`;

const Article = styled.p`
  margin-top: 0;
  margin-bottom: 0px;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: left;
  color: #4a4a4a;
`;

const Link = styled.a`
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
  cursor: pointer;
`;

export default () => {
  return (
    <Container>
      <div className="container">
        <div className="row center-lg">
          <div className="col-xs-12 col-lg-10">
            <HeadWrapper>
              <Icon background={plane} />
              <Head>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Head>
            </HeadWrapper>
            <Article>
              Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на
              самолет по сотням авиакомпаний и находим за считанные минуты самые
              дешевые авиабилеты. Чтобы купить авиабилет дешево, воспользуйтесь
              нашим поиском, который совершенно бесплатно сравнивает цены на
              авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
              смысла ходить в авиакассы, обзванивать агентства — дешевый билет
              находится на расстоянии клика. На нашем сайте вы можете подобрать
              дешевые билеты на самолет в Европу, Азию и на другие континенты.
              Мы написали для вас простую инструкцию о том, как пользоваться
              поиском и экономить на перелетах от 1000 до 20&nbsp;000 руб в год.{" "}
              <Link>Подробнее</Link>
            </Article>

            <HeadWrapper>
              <Icon background={email} />
              <Head>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Head>
            </HeadWrapper>
            <Article>
              Электронный авиабилет — это, по сути, обычный билет на самолет, но
              только в менее привычном для путешественника виде. Вся информация
              об авиаперелете (данные пассажира, маршрут следования) хранится в
              электронной базе, а пассажир получает на руки маршрут-квитанцию.
              Некоторые пассажиры, купив авиабилет онлайн и получив
              маршрут-квитанцию, удивлены ее видом — это обыкновенный лист
              формата А4, на котором распечатана вся информация о предстоящем
              перелете. Однако это действительно официальный документ,
              подтверждающий договор между авиаперевозчиком и пассажиром. При
              регистрации на рейс пассажир должен предъявить маршрут-квитанцию
              вместе с удостоверением личности точно так же, как предъявляют
              обыкновенный бумажный билет. Следует отметить, что электронный
              билет, приобретенный онлайн, стоит дешевле своего бумажного
              аналога. <Link>Подробнее</Link>
            </Article>

            <HeadWrapper>
              <Icon background={list} />
              <Head>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Head>
            </HeadWrapper>
            <Article>
              Есть масса путеводителей по странам, но ни одного о том, как
              провести время в самолете. Для того, чтобы сделать ваш перелет
              максимально комфортным, мы написали 20 советов о подготовке к
              путешествию. Ведь настоящее путешествие начинается со слов «Добро
              пожаловать на борт нашего самолета»! <Link>Подробнее</Link>
            </Article>
          </div>
        </div>
      </div>
    </Container>
  );
};
