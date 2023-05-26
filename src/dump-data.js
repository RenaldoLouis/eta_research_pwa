// import logo from "../src/assets/Images/dummy-promo-lemonade.jpg";
import neuesBier from "../src/assets/images/Neues_Bier_ab_Marz.png";
import jetztRabatt from "../src/assets/images/Jetzt_Rabatt_Auf_Purwasser_Sichern.png";
import wirLaden from "../src/assets/images/Wir_Laden_Ihre_Mitarbeiten.png";

export const promoDummyData = [
    {
        id: 1,
        image: neuesBier,
        title: "Nimm einen Schluck! Das neue Bier kommt im März",
        detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        image: jetztRabatt,
        title: "Genießen Sie eine Ermäßigung auf jeden Kauf von Purwasser",
        detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 3,
        image: wirLaden,
        title: "Besuchen Sie unseren Gastro-Workshop am 23. Mai 2023",
        detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
];



export const deliveryDummyData = [
    {
      id: 1,
      deliveryStatus: "Done",
      twStart: "09.00",
      twEnd: "09.30",
      vehicle: "BCY-1111",
      date: "Mo, 7. März 2023",
      tourSorted: "",
      totalStops: 0,
      isCanceled: false,
      products: [0, 1, 2],
      address: "Am luftschiffhafen 1, 62500 Postdam",
      clientName: "Josef Biernoth, Getränkegroßhandel",
      plateDriver: "1154678490AB",
      itemList: [
        {
          id: "Beleg 1101271",
          items: [
            {
              productName: "Apfelschorle PETC. 12 x 1,00",
              amount: -1,
              unit: "KL",
              onTruck: 3,
              ordered: 2,
              warning: true,
            },
            {
              productName: "Selters Gastro 24 x 0.25",
              amount: 4,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Helles Spezial KEG 1 x 30,0",
              amount: 2,
              unit: "FAS",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Radler Alkoholfrei 24 x 0,33",
              amount: 5,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Biogon Kohlensäure CE290 Kurz 1 x 10,0",
              amount: 5,
              unit: "ST",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
          ]
        },
        {
          id: "Beleg 1101272",
          items: [
            {
              productName: "Apfelschorle PETC. 12 x 1,00",
              amount: -1,
              unit: "KL",
              onTruck: 3,
              ordered: 2,
              warning: true,
            },
            {
              productName: "Selters Gastro 24 x 0.25",
              amount: 4,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Helles Spezial KEG 1 x 30,0",
              amount: 2,
              unit: "FAS",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Radler Alkoholfrei 24 x 0,33",
              amount: 5,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Biogon Kohlensäure CE290 Kurz 1 x 10,0",
              amount: 5,
              unit: "ST",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
          ]
        },
        {
          id: "Beleg 1101275",
          items: [
            {
              productName: "Apfelschorle PETC. 12 x 1,00",
              amount: -1,
              unit: "KL",
              onTruck: 3,
              ordered: 2,
              warning: false,
            },
            {
              productName: "Selters Gastro 24 x 0.25",
              amount: 4,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Helles Spezial KEG 1 x 30,0",
              amount: 2,
              unit: "FAS",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Radler Alkoholfrei 24 x 0,33",
              amount: 5,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Biogon Kohlensäure CE290 Kurz 1 x 10,0",
              amount: 5,
              unit: "ST",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
          ]
        },
        {
          id: "Beleg 1101276",
          items: [
            {
              productName: "Apfelschorle PETC. 12 x 1,00",
              amount: -1,
              unit: "KL",
              onTruck: 3,
              ordered: 2,
              warning: false,
            },
            {
              productName: "Selters Gastro 24 x 0.25",
              amount: 4,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Helles Spezial KEG 1 x 30,0",
              amount: 2,
              unit: "FAS",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Radler Alkoholfrei 24 x 0,33",
              amount: 5,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Biogon Kohlensäure CE290 Kurz 1 x 10,0",
              amount: 5,
              unit: "ST",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
          ]
        },
        {
          id: "Beleg 1101277",
          items: [
            {
              productName: "Apfelschorle PETC. 12 x 1,00",
              amount: -1,
              unit: "KL",
              onTruck: 3,
              ordered: 2,
              warning: false,
            },
            {
              productName: "Selters Gastro 24 x 0.25",
              amount: 4,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Helles Spezial KEG 1 x 30,0",
              amount: 2,
              unit: "FAS",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Radler Alkoholfrei 24 x 0,33",
              amount: 5,
              unit: "KL",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
            {
              productName: "Biogon Kohlensäure CE290 Kurz 1 x 10,0",
              amount: 5,
              unit: "ST",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
          ]
        }
      ],
    },
    {
      id: 2,
      deliveryStatus: "Done",
      date: "Mon, 20 Jan 2021",
      twStart: "10.00",
      twEnd: "10.30",
      vehicle: "BCY-1111",
      tourSorted: "",
      totalStops: 0,
      isCanceled: false,
      products: [0, 1, 2, 3],
      address: "Postdramer Str.55, 62500 Postdam",
      clientName: "Jette Werner, Edeka Markt",
      plateDriver: "6725541901TR",
      itemList: [
        {
          id: 'Beleg 1101279',
          items: [
            {
              productName: "Product Name 1",
              amount: 12,
              unit: "Fas",
              onTruck: 12,
              ordered: 8,
              disable: false,
              warning: false,
            },
            {
              productName: "Product Name 2",
              amount: 10,
              unit: "Fas",
              onTruck: 12,
              ordered: 8,
              warning: false,
            },
          ]
        }
      ],
    },
    // {
    //   id: 3,
    //   stopStatus: 'Early',
    //   date: 'Mon, 19 Jan 2021',
    //   twStart: '11.00',
    //   twEnd: '12.30',
    //   vehicle: 'BCY-1111',
    //   tourSorted: '',
    //   totalStops: 0,
    //   isCanceled: false,
    //   products: [0, 1, 2, 3],
    //   address: 'Lindenstraße 6, 14467 Potsdam, Germany',
    //   clientName: 'Real',
    //   orderNumber: '1234567890AB',
    //   orderPositions: [
    //     {
    //       productName: 'Product Name 1',
    //       amount: 12,
    //       unit: 'Fas',
    //       onTruck: 12,
    //       ordered: 8,
    //       warning: false
    //     },
    //   ]
    // },
    // {
    //   id: 4,
    //   stopStatus: 'Done',
    //   date: 'Mon, 19 Jan 2021',
    //   twStart: '11.00',
    //   twEnd: '12.30',
    //   vehicle: 'BCY-1111',
    //   tourSorted: '',
    //   totalStops: 0,
    //   isCanceled: false,
    //   products: [0, 1, 2],
    //   address: 'Lindenstraße 6, 14467 Potsdam, Germany',
    //   clientName: 'Spar',
    //   orderNumber: '1234567890AB',
    //   orderPositions: [
    //     {
    //       productName: 'Product Name 1',
    //       amount: 12,
    //       unit: 'Fas',
    //       onTruck: 12,
    //       ordered: 8,
    //       warning: false
    //     },
    //     {
    //       productName: 'Product Name 2',
    //       amount: 10,
    //       unit: 'Fas',
    //       onTruck: 12,
    //       ordered: 8,
    //       warning: false
    //     },
    //   ]
    // },
  ];

export const emailDummyList = [
    {
        id: 1,
        email: "Email@example.com",
        roles: "admin",
    },
    {
        id: 2,
        email: "Email2@example.com",
        roles: "standard",
    },
    {
        id: 3,
        email: "Email3@example.com",
        roles: "superAdmin",
    },
    {
        id: 4,
        email: "Email4@example.com",
        roles: "standard",
    },
    {
        id: 5,
        email: "Email5@example.com",
        roles: "admin",
    },
];