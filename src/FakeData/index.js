import rossiaFull from './airlines/rossia-full.png';
import rossiaShort from './airlines/rossia-short.png';
import nordwindFull from './airlines/nordwind-full.png';
import nordwindOldFull from './airlines/nordwind-old-full.png';

import redWingsFull from './airlines/red-wings-full.png';
import redWingsShort from './airlines/red-wings-short.png';

export const results = [
  {
    badge: 'cheapest',
    terms: [
      {
        handbag: 5,
        baggage: 15,
        prices: [
          {
            company: 'Билетик Аэро',
            price: 7812,
          },
          {
            company: 'Компания',
            price: 7916,
          },
          {
            company: 'Clickavia',
            price: 8000,
          },
          {
            company: 'Clickavia',
            price: 8000,
          },
          {
            company: 'Clickavia',
            price: 8000,
          },
        ],
      },
    ],
    flight: {
      charter: true,
      airlines: [
        {
          name: 'Россия',
          logo: rossiaFull,
          shortLogo: rossiaShort,
        },
        {
          name: 'Россия',
          logo: rossiaFull,
          shortLogo: rossiaShort,
        },
      ],
      segments: [
        {
          wayBack: false,
          departure: {
            airport: 'VKO',
            date: 1520062500,
            offset: 60,
          },
          arrival: {
            airport: 'BCN',
            date: 1520080500,
            offset: 180,
          },
          duration: 300,
        },
        {
          wayBack: true,
          departure: {
            airport: 'BCN',
            date: 1524573000,
            offset: 60,
          },
          arrival: {
            airport: 'SVO',
            date: 1524601800,
            offset: 180,
          },
          duration: 275,
        },
      ],
    },
  },
  {
    badge: 'fastest',
    terms: [
      {
        handbag: 5,
        baggage: 0,
        prices: [
          {
            company: 'Билетик Аэро',
            price: 8029,
          },
          {
            company: 'Компания',
            price: 7916,
          },
        ],
      },
    ],
    flight: {
      charter: false,
      airlines: [
        {
          name: 'Nordwind',
          logo: nordwindFull,
          shortLogo: '',
        },
      ],
      segments: [
        {
          wayBack: false,
          departure: {
            airport: 'VKO',
            date: 1520062500,
            offset: 180,
          },
          arrival: {
            airport: 'BCN',
            date: 1520062500,
            offset: 60,
          },
          duration: 295,
        },
        {
          wayBack: true,
          departure: {
            airport: 'BCN',
            date: 1524558600,
            offset: 60,
          },
          arrival: {
            airport: 'SVO',
            date: 1524601800,
            offset: 180,
          },
          duration: 270,
        },
      ],
    },
  },
  {
    badge: 'best',
    terms: [
      {
        handbag: 5,
        baggage: 0,
        prices: [
          {
            company: 'Билетик Аэро',
            price: 8300,
          },
        ],
      },
      {
        handbag: 5,
        baggage: 12,
        prices: [
          {
            company: 'Aviakassa',
            price: 8164,
          },
        ],
      },
    ],
    flight: {
      charter: true,
      airlines: [
        {
          name: 'Nordwind',
          logo: nordwindOldFull,
          shortLogo: '',
        },
      ],
      segments: [
        {
          wayBack: false,
          departure: {
            airport: 'VKO',
            date: 1520062500,
            offset: 180,
          },
          arrival: {
            airport: 'BCN',
            date: 1520062500,
            offset: 60,
          },
          duration: 295,
        },
        {
          wayBack: true,
          departure: {
            airport: 'BCN',
            date: 1524562200,
            offset: 60,
          },
          arrival: {
            airport: 'SVO',
            date: 1524601800,
            offset: 180,
          },
          duration: 270,
        },
      ],
    },
  },
  {
    badge: '',
    terms: [
      {
        handbag: 10,
        baggage: -1,
        prices: [
          {
            company: 'Билетик Аэро',
            price: 8530,
          },
        ],
      },
      {
        handbag: 10,
        baggage: 20,
        prices: [
          {
            company: 'Билетик Аэро',
            price: 8240,
          },
          {
            company: 'Clickavia',
            price: 8302,
          },
          {
            company: 'Aviakassa',
            price: 8376,
          },
          {
            company: 'Aviakassa',
            price: 8376,
          },
          {
            company: 'Aviakassa',
            price: 8376,
          },
        ],
      },
    ],
    flight: {
      charter: true,
      airlines: [
        {
          name: 'Red wings',
          logo: redWingsFull,
          shortLogo: redWingsShort,
        },
      ],
      segments: [
        {
          wayBack: false,
          departure: {
            airport: 'VKO',
            date: 1520062500,
            offset: 180,
          },
          arrival: {
            airport: 'BCN',
            date: 1520062500,
            offset: 60,
          },
          duration: 270,
        },
        {
          wayBack: true,
          departure: {
            airport: 'BCN',
            date: 1524558600,
            offset: 60,
          },
          arrival: {
            airport: 'SVO',
            date: 1524601800,
            offset: 180,
          },
          duration: 270,
        },
      ],
    },
  },
];

export const airports = {
  LED: {
    name: 'Пулково',
    time_zone: 'Europe/Moscow',
    country: 'Россия',
    rates: '259',
    city: 'Санкт-Петербург',
  },
  DME: {
    name: 'Домодедово',
    time_zone: 'Europe/Moscow',
    country: 'Россия',
    rates: '392',
    city: 'Москва',
  },
  SVO: {
    rates: '307',
    country: 'Россия',
    name: 'Шереметьево',
    average_rate: '3.63',
    city: 'Москва',
    time_zone: 'Europe/Moscow',
  },
  VKO: {
    name: 'Внуково',
    time_zone: 'Europe/Moscow',
    country: 'Россия',
    rates: '211',
    city: 'Москва',
  },
  BCN: {
    name: 'Аэропорт в Испании',
    time_zone: 'Europe/Moscow',
    country: 'Испания',
    rates: '211',
    city: 'Барселона',
  },
};
