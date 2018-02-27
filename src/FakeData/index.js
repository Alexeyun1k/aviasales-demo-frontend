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
            company: "Билетик Аэро",
            price: 7812
          },
          {
            company: "Компания",
            price: 7916
          },
          {
            company: "Clickavia",
            price: 8000
          },
          {
            company: "Clickavia",
            price: 8000
          },
          {
            company: "Clickavia",
            price: 8000
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
        },
        {
          name: "Россия",
          logo: rossia_full,
          shortLogo: rossia_short
        }
      ],
      segments: [
        {
          wayBack: false,
          departure: {
            city: "Москва",
            airport: "VKO",
            date: 1520062500,
            offset: 60
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: 1520080500,
            offset: 180
          },
          duration: 300
        },
        {
          wayBack: true,
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: 1524573000,
            offset: 60
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: 1524601800,
            offset: 180
          },
          duration: 275
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
            price: 8029
          },
          {
            company: "Компания",
            price: 7916
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
          wayBack: false,
          departure: {
            city: "Москва",
            airport: "VKO",
            date: 1520062500,
            offset: 180
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: 1520062500,
            offset: 60
          },
          duration: 295
        },
        {
          wayBack: true,
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: 1524558600,
            offset: 60
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: 1524601800,
            offset: 180
          },
          duration: 270
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
            price: 8300
          }
        ]
      },
      {
        handbag: 5,
        baggage: 12,
        prices: [
          {
            company: "Aviakassa",
            price: 8164
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
          wayBack: false,
          departure: {
            city: "Москва",
            airport: "VKO",
            date: 1520062500,
            offset: 180
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: 1520062500,
            offset: 60
          },
          duration: 295
        },
        {
          wayBack: true,
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: 1524562200,
            offset: 60
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: 1524601800,
            offset: 180
          },
          duration: 270
        }
      ]
    }
  },
  {
    badge: "",
    terms: [
      {
        handbag: 10,
        baggage: -1,
        prices: [
          {
            company: "Билетик Аэро",
            price: 8530
          }
        ]
      },
      {
        handbag: 10,
        baggage: 20,
        prices: [
          {
            company: "Билетик Аэро",
            price: 8240
          },
          {
            company: "Clickavia",
            price: 8302
          },
          {
            company: "Aviakassa",
            price: 8376
          },
          {
            company: "Aviakassa",
            price: 8376
          },
          {
            company: "Aviakassa",
            price: 8376
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
          shortLogo: red_wings_short
        }
      ],
      segments: [
        {
          wayBack: false,
          departure: {
            city: "Москва",
            airport: "VKO",
            date: 1520062500,
            offset: 180
          },
          arrival: {
            city: "Барселона",
            airport: "BCN",
            date: 1520062500,
            offset: 60
          },
          duration: 270
        },
        {
          wayBack: true,
          departure: {
            city: "Барселона",
            airport: "BCN",
            date: 1524558600,
            offset: 60
          },
          arrival: {
            city: "Москва",
            airport: "SVO",
            date: 1524601800,
            offset: 180
          },
          duration: 270
        }
      ]
    }
  }
];
