import rossia_full from "./airlines/rossia-full.png";
import rossia_short from "./airlines/rossia-short.png";
import nordwind_full from "./airlines/nordwind-full.png";
import nordwind_old_full from "./airlines/nordwind-old-full.png";

import red_wings_full from "./airlines/red-wings-full.png";
import red_wings_short from "./airlines/red-wings-short.png";

export const results = [
  {
    badge: "cheapest",
    terms: [
      {
        handbag: 5,
        baggage: 15,
        prices: [
          {
            company: "Clickavia",
            price: "7 712"
          }
        ]
      }
    ],
    flight: {
      charter: true,
      airlines: [
        {
          name: "Россия",
          logo: rossia_full,
          shortLogo: rossia_short
        }
      ],
      segments: [
        {
          type: "to",
          departure: {
            city: "Москва",
            airport: "VKO",
            date: "24 фев 2018, Сб ",
            time: "00:05"
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: "24 фев 2018, Сб",
            time: "03:05"
          },
          duration: "5ч"
        },
        {
          type: "back",
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: "3 мар 2018, Сб",
            time: "10:35"
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: "3 мар 2018, Сб",
            time: "17:10"
          },
          duration: "4ч 35м"
        }
      ]
    }
  },
  {
    badge: "fastest",
    terms: [
      {
        handbag: 5,
        baggage: 0,
        prices: [
          {
            company: "Билетик Аэро",
            price: "8 029"
          }
        ]
      }
    ],
    flight: {
      charter: false,
      airlines: [
        {
          name: "Nordwind",
          logo: nordwind_full,
          shortLogo: ""
        }
      ],
      segments: [
        {
          type: "to",
          departure: {
            city: "Москва",
            airport: "VKO",
            date: "24 фев 2018, Сб ",
            time: "00:15"
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: "24 фев 2018, Сб",
            time: "03:10"
          },
          duration: "4ч 55м"
        },
        {
          type: "back",
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: "3 мар 2018, Сб",
            time: "10:45"
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: "3 мар 2018, Сб",
            time: "17:15"
          },
          duration: "4ч 30м"
        }
      ]
    }
  },
  {
    badge: "best",
    terms: [
      {
        handbag: 5,
        baggage: 0,
        prices: [
          {
            company: "Билетик Аэро",
            price: "8 300"
          }
        ]
      },
      {
        handbag: 5,
        baggage: 12,
        prices: [
          {
            company: "Aviakassa",
            price: "8 164"
          }
        ]
      }
    ],
    flight: {
      charter: true,
      airlines: [
        {
          name: "Nordwind",
          logo: nordwind_old_full,
          shortLogo: ""
        }
      ],
      segments: [
        {
          type: "to",
          departure: {
            city: "Москва",
            airport: "VKO",
            date: "24 фев 2018, Сб ",
            time: "00:15"
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: "24 фев 2018, Сб",
            time: "03:10"
          },
          duration: "4ч 55м"
        },
        {
          type: "back",
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: "3 мар 2018, Сб",
            time: "10:45"
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: "3 мар 2018, Сб",
            time: "17:15"
          },
          duration: "4ч 30м"
        }
      ]
    }
  },
  {
    badge: "",
    terms: [
      {
        handbag: 10,
        baggage: 0,
        prices: [
          {
            company: "Билетик Аэро",
            price: "8 530"
          }
        ]
      },
      {
        handbag: 10,
        baggage: 20,
        prices: [
          {
            company: "Билетик Аэро",
            price: "8 240"
          },
          {
            company: "Clickavia",
            price: "8 302"
          },
          {
            company: "Aviakassa",
            price: "8 376"
          },
          {
            company: "Aviakassa",
            price: "8 376"
          },
          {
            company: "Aviakassa",
            price: "8 376"
          }
        ]
      }
    ],
    flight: {
      charter: true,
      airlines: [
        {
          name: "Red wings",
          logo: red_wings_full,
          shortLogo: ""
        }
      ],
      segments: [
        {
          type: "to",
          departure: {
            city: "Москва",
            airport: "VKO",
            date: "24 фев 2018, Сб ",
            time: "07:00"
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: "24 фев 2018, Сб",
            time: "09:30"
          },
          duration: "4ч 30м"
        },
        {
          type: "back",
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: "3 мар 2018, Сб",
            time: "10:45"
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: "3 мар 2018, Сб",
            time: "17:15"
          },
          duration: "4ч 30м"
        }
      ]
    }
  }
];
