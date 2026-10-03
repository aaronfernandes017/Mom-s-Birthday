'use strict';
const CONTENT={year:2026,title:"Birthday Adventure",birthdayMessage:"Happy birthday, Mom! I love you so much, and you mean so much to me. I miss you while I’m away at college, and I made this little adventure just for you. Thank you for being my mom. Sending you all my love, today and always. ♡"};
const DEV_MODE=false; // Enable locally to reveal isolated developer tools.
const LEVELS=[
  {
    "id": 1,
    "date": "2026-10-03",
    "title": "Coastal arrival",
    "destination": "Arambol Beach",
    "gameType": "find",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-1",
      "find-2"
    ],
    "factSource": null
  },
  {
    "id": 2,
    "date": "2026-10-04",
    "title": "Shell stories",
    "destination": "Morjim Beach",
    "gameType": "memory",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-3",
      "find-4"
    ],
    "factSource": null
  },
  {
    "id": 3,
    "date": "2026-10-05",
    "title": "A colorful lane",
    "destination": "Vagator Beach",
    "gameType": "assemble",
    "catholicTheme": false,
    "fact": "Goan steamed rice cakes.",
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-5",
      "find-6"
    ],
    "factSource": "https://goa-tourism.com/food/goan-sweets/"
  },
  {
    "id": 4,
    "date": "2026-10-06",
    "title": "Garden baskets",
    "destination": "Anjuna Beach",
    "gameType": "sort",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-7",
      "find-8"
    ],
    "factSource": null
  },
  {
    "id": 5,
    "date": "2026-10-07",
    "title": "Quiet courtyard",
    "destination": "Mae de Deus Church, Saligao",
    "gameType": "difference",
    "catholicTheme": true,
    "fact": null,
    "asset": null,
    "setting": "church",
    "source": "https://www.goa.gov.in/what_to_see/churches/",
    "eggs": [
      "find-9",
      "find-10"
    ],
    "factSource": null
  },
  {
    "id": 6,
    "date": "2026-10-08",
    "title": "Along the river",
    "destination": "Baga Beach",
    "gameType": "maze",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-11",
      "find-12"
    ],
    "factSource": null
  },
  {
    "id": 7,
    "date": "2026-10-09",
    "title": "Market shapes",
    "destination": "Calangute Beach",
    "gameType": "match",
    "catholicTheme": false,
    "fact": "Goan potters make decorative and everyday clay objects.",
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-13",
      "find-14"
    ],
    "factSource": "https://goa-tourism.com/culture/handicrafts-of-goa-2/"
  },
  {
    "id": 8,
    "date": "2026-10-10",
    "title": "Paper stars",
    "destination": "Candolim Beach",
    "gameType": "catch",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-15",
      "find-16"
    ],
    "factSource": null
  },
  {
    "id": 9,
    "date": "2026-10-11",
    "title": "Little postcards",
    "destination": "Sinquerim Beach",
    "gameType": "sequence",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-17",
      "find-18"
    ],
    "factSource": null
  },
  {
    "id": 10,
    "date": "2026-10-12",
    "title": "Flower borders",
    "destination": "Reis Magos Church",
    "gameType": "pattern",
    "catholicTheme": true,
    "fact": null,
    "asset": null,
    "setting": "church",
    "source": "https://www.goa.gov.in/what_to_see/churches/",
    "eggs": [
      "find-19",
      "find-20"
    ],
    "factSource": null
  },
  {
    "id": 11,
    "date": "2026-10-13",
    "title": "Boats at rest",
    "destination": "Mapusa",
    "gameType": "connect",
    "catholicTheme": false,
    "fact": "Batik prints feature among Goa’s textile crafts.",
    "asset": null,
    "setting": "town",
    "source": "https://goa-tourism.com/wp-content/uploads/2023/01/GOA-MAP.pdf",
    "eggs": [
      "find-21",
      "find-22"
    ],
    "factSource": "https://goa-tourism.com/culture/handicrafts-of-goa-2/"
  },
  {
    "id": 12,
    "date": "2026-10-14",
    "title": "Grove glow",
    "destination": "Panaji",
    "gameType": "rhythm",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "town",
    "source": "https://goa-tourism.com/wp-content/uploads/2023/01/GOA-MAP.pdf",
    "eggs": [
      "find-23",
      "find-24"
    ],
    "factSource": null
  },
  {
    "id": 13,
    "date": "2026-10-15",
    "title": "A riverside picnic",
    "destination": "Miramar Beach",
    "gameType": "place",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-25",
      "find-26"
    ],
    "factSource": null
  },
  {
    "id": 14,
    "date": "2026-10-16",
    "title": "The winding trail",
    "destination": "Bambolim Beach",
    "gameType": "route",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-27",
      "find-28"
    ],
    "factSource": null
  },
  {
    "id": 15,
    "date": "2026-10-17",
    "title": "A balanced picture",
    "destination": "Our Lady of the Immaculate Conception Church, Panaji",
    "gameType": "symmetry",
    "catholicTheme": true,
    "fact": "Tiatr is one of Goa’s traditional theatre forms.",
    "asset": null,
    "setting": "church",
    "source": "https://www.goa.gov.in/what_to_see/churches/",
    "eggs": [
      "find-29",
      "find-30"
    ],
    "factSource": "https://dip.goa.gov.in/people-of-goa/"
  },
  {
    "id": 16,
    "date": "2026-10-18",
    "title": "Village decorations",
    "destination": "Velsao Beach",
    "gameType": "decorate",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://www.goa.gov.in/what_to_see/beaches/",
    "eggs": [
      "find-31",
      "find-32"
    ],
    "factSource": null
  },
  {
    "id": 17,
    "date": "2026-10-19",
    "title": "Across the bridge",
    "destination": "Majorda Beach",
    "gameType": "bridge",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-33",
      "find-34"
    ],
    "factSource": null
  },
  {
    "id": 18,
    "date": "2026-10-20",
    "title": "Butterfly garden",
    "destination": "Betalbatim Beach",
    "gameType": "recall",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-35",
      "find-36"
    ],
    "factSource": null
  },
  {
    "id": 19,
    "date": "2026-10-21",
    "title": "Coastal wandering",
    "destination": "Colva Beach",
    "gameType": "move",
    "catholicTheme": false,
    "fact": "Kayaking is among Goa’s listed water activities.",
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-37",
      "find-38"
    ],
    "factSource": "https://www.goa.gov.in/wp-content/uploads/2020/10/Circular-Safety-Hygiene-Guide-For-Watersports-River-Cruise-Activities.pdf"
  },
  {
    "id": 20,
    "date": "2026-10-22",
    "title": "Courtyard details",
    "destination": "Basilica of Bom Jesus, Old Goa",
    "gameType": "find",
    "catholicTheme": true,
    "fact": null,
    "asset": null,
    "setting": "church",
    "source": "https://goa-tourism.com/guide/old-goa-heritage/",
    "eggs": [
      "find-39",
      "find-40"
    ],
    "factSource": null
  },
  {
    "id": 21,
    "date": "2026-10-23",
    "title": "Seaside pieces",
    "destination": "Benaulim Beach",
    "gameType": "assemble",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-41",
      "find-42"
    ],
    "factSource": null
  },
  {
    "id": 22,
    "date": "2026-10-24",
    "title": "Stepping stones",
    "destination": "Varca Beach",
    "gameType": "sequence",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-43",
      "find-1"
    ],
    "factSource": null
  },
  {
    "id": 23,
    "date": "2026-10-25",
    "title": "Paper boats",
    "destination": "Cavelossim Beach",
    "gameType": "timing",
    "catholicTheme": false,
    "fact": "Soft pancakes filled with coconut and jaggery.",
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-2",
      "find-3"
    ],
    "factSource": "https://goa-tourism.com/food/goan-sweets/"
  },
  {
    "id": 24,
    "date": "2026-10-26",
    "title": "Hidden stars",
    "destination": "Mobor Beach",
    "gameType": "explore",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-4",
      "find-5"
    ],
    "factSource": null
  },
  {
    "id": 25,
    "date": "2026-10-27",
    "title": "Garden mosaic",
    "destination": "Holy Spirit Church, Margao",
    "gameType": "mosaic",
    "catholicTheme": true,
    "fact": null,
    "asset": null,
    "setting": "church",
    "source": "https://www.goa.gov.in/what_to_see/churches/",
    "eggs": [
      "find-6",
      "find-7"
    ],
    "factSource": null
  },
  {
    "id": 26,
    "date": "2026-10-28",
    "title": "Stars above",
    "destination": "Betul Beach",
    "gameType": "trace",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-8",
      "find-9"
    ],
    "factSource": null
  },
  {
    "id": 27,
    "date": "2026-10-29",
    "title": "Journey scrapbook",
    "destination": "Agonda Beach",
    "gameType": "scrapbook",
    "catholicTheme": false,
    "fact": "Rice and fish curry are a staple Goan meal.",
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-10",
      "find-11"
    ],
    "factSource": "https://dip.goa.gov.in/people-of-goa/"
  },
  {
    "id": 28,
    "date": "2026-10-30",
    "title": "Birthday garden",
    "destination": "Palolem Beach",
    "gameType": "finale",
    "catholicTheme": false,
    "fact": null,
    "asset": null,
    "setting": "beach",
    "source": "https://goa-tourism.com/beach/",
    "eggs": [
      "find-12",
      "find-13"
    ],
    "factSource": null
  }
];
// Researched optional discoveries, approved by the request for Goan cultural Easter eggs.
const EGGS=[
  {
    "id": "find-1",
    "category": "Food",
    "title": "Bebinca",
    "text": "A Goan dessert with many baked layers.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "cake"
  },
  {
    "id": "find-2",
    "category": "Food",
    "title": "Alle Belle",
    "text": "Soft pancakes filled with coconut and jaggery.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "roll"
  },
  {
    "id": "find-3",
    "category": "Food",
    "title": "Patoli",
    "text": "A steamed sweet wrapped in a turmeric leaf.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "leaf"
  },
  {
    "id": "find-4",
    "category": "Food",
    "title": "Perad",
    "text": "A guava sweet also called guava cheese.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "sweet"
  },
  {
    "id": "find-5",
    "category": "Food",
    "title": "Sanna",
    "text": "Goan steamed rice cakes.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "rice"
  },
  {
    "id": "find-6",
    "category": "Food",
    "title": "Bol",
    "text": "A coconut-and-jaggery cake.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "bread"
  },
  {
    "id": "find-7",
    "category": "Food",
    "title": "Shirvale",
    "text": "Rice or finger-millet noodles served with sweetened coconut milk.",
    "source": "https://goa-tourism.com/food/goan-sweets/",
    "icon": "bowl"
  },
  {
    "id": "find-8",
    "category": "Food",
    "title": "Poi",
    "text": "Poi is a Goan bread.",
    "source": "https://www.niti.gov.in/sites/default/files/2026-04/Divya-Bharat-A-WIndow-to-the-Soul-of-India-Web.pdf",
    "icon": "bread"
  },
  {
    "id": "find-9",
    "category": "Food",
    "title": "Khatkhate",
    "text": "A Goan mixed-vegetable stew with coconut.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "bowl"
  },
  {
    "id": "find-10",
    "category": "Food",
    "title": "Fish curry and rice",
    "text": "Rice and fish curry are a staple Goan meal.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "fish"
  },
  {
    "id": "find-11",
    "category": "Food",
    "title": "Xacuti",
    "text": "Xacuti is among the dishes of Goan cuisine.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "bowl"
  },
  {
    "id": "find-12",
    "category": "Craft",
    "title": "Bamboo baskets",
    "text": "Bamboo craft in Goa includes baskets and mats.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "basket"
  },
  {
    "id": "find-13",
    "category": "Craft",
    "title": "Terracotta",
    "text": "Goan potters make decorative and everyday clay objects.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "pot"
  },
  {
    "id": "find-14",
    "category": "Craft",
    "title": "Crochet",
    "text": "Crochet appears in Goan handmade garments and household linens.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "lace"
  },
  {
    "id": "find-15",
    "category": "Craft",
    "title": "Embroidery",
    "text": "Embroidered linens are among Goa’s crafts.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "cloth"
  },
  {
    "id": "find-16",
    "category": "Craft",
    "title": "Wood carving",
    "text": "Wood carving is one of Goa’s handicrafts.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "wood"
  },
  {
    "id": "find-17",
    "category": "Craft",
    "title": "Wooden lacquerware",
    "text": "Painted wooden lacquerware is made by Goan artisans.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "toy"
  },
  {
    "id": "find-18",
    "category": "Craft",
    "title": "Jute macramé",
    "text": "Knotted jute becomes bags and decorative hangings.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "lace"
  },
  {
    "id": "find-19",
    "category": "Craft",
    "title": "Coconut-shell carving",
    "text": "Goan craft includes masks carved from coconut shells.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "mask"
  },
  {
    "id": "find-20",
    "category": "Craft",
    "title": "Seashell craft",
    "text": "Shells are used in decorative Goan craftwork.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "shell"
  },
  {
    "id": "find-21",
    "category": "Craft",
    "title": "Batik",
    "text": "Batik prints feature among Goa’s textile crafts.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "cloth"
  },
  {
    "id": "find-22",
    "category": "Craft",
    "title": "Fibre craft",
    "text": "Banana and sisal fibre can become bags and coasters.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "basket"
  },
  {
    "id": "find-23",
    "category": "Craft",
    "title": "Artistic weaving",
    "text": "Weaving is part of Goa’s varied craft traditions.",
    "source": "https://goa-tourism.com/culture/handicrafts-of-goa-2/",
    "icon": "cloth"
  },
  {
    "id": "find-24",
    "category": "Music & stage",
    "title": "Mando",
    "text": "Mando belongs to Goa’s traditional music and dance repertoire.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "music"
  },
  {
    "id": "find-25",
    "category": "Music & stage",
    "title": "Dulpod",
    "text": "Dulpod is among Goa’s traditional art forms.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "music"
  },
  {
    "id": "find-26",
    "category": "Music & stage",
    "title": "Fugdi",
    "text": "Fugdi is a traditional Goan dance form.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "music"
  },
  {
    "id": "find-27",
    "category": "Music & stage",
    "title": "Dekhni",
    "text": "Dekhni is part of Goa’s traditional performing arts.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "music"
  },
  {
    "id": "find-28",
    "category": "Music & stage",
    "title": "Corridinho",
    "text": "Corridinho features among Goa’s traditional art forms.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "music"
  },
  {
    "id": "find-29",
    "category": "Music & stage",
    "title": "Tiatr",
    "text": "Tiatr is one of Goa’s traditional theatre forms.",
    "source": "https://dip.goa.gov.in/people-of-goa/",
    "icon": "stage"
  },
  {
    "id": "find-30",
    "category": "Nature",
    "title": "Coconut",
    "text": "Coconut is grown in Goa.",
    "source": "https://msme.goa.gov.in/focused-sectors/agro-food-processing",
    "icon": "coconut"
  },
  {
    "id": "find-31",
    "category": "Nature",
    "title": "Cashew",
    "text": "Goa grows and processes cashew nuts.",
    "source": "https://msme.goa.gov.in/focused-sectors/agro-food-processing",
    "icon": "cashew"
  },
  {
    "id": "find-32",
    "category": "Nature",
    "title": "Rice",
    "text": "Rice is one of the crops grown in Goa.",
    "source": "https://msme.goa.gov.in/focused-sectors/agro-food-processing",
    "icon": "rice"
  },
  {
    "id": "find-33",
    "category": "Nature",
    "title": "Sugarcane",
    "text": "Sugarcane is among Goa’s cultivated crops.",
    "source": "https://msme.goa.gov.in/focused-sectors/agro-food-processing",
    "icon": "cane"
  },
  {
    "id": "find-34",
    "category": "Nature",
    "title": "Areca nut",
    "text": "Areca nut is grown in Goa.",
    "source": "https://msme.goa.gov.in/focused-sectors/agro-food-processing",
    "icon": "leaf"
  },
  {
    "id": "find-35",
    "category": "Nature",
    "title": "Mancurad mango",
    "text": "Mancurad mango appears in Goa’s agricultural produce.",
    "source": "https://www.goa.gov.in/wp-content/uploads/2023/09/Governor-Address-2023.pdf",
    "icon": "mango"
  },
  {
    "id": "find-36",
    "category": "Nature",
    "title": "Moira banana",
    "text": "Moira banana is among Goa’s agricultural produce.",
    "source": "https://www.goa.gov.in/wp-content/uploads/2023/09/Governor-Address-2023.pdf",
    "icon": "banana"
  },
  {
    "id": "find-37",
    "category": "Out & about",
    "title": "Kayaking",
    "text": "Kayaking is among Goa’s listed water activities.",
    "source": "https://www.goa.gov.in/wp-content/uploads/2020/10/Circular-Safety-Hygiene-Guide-For-Watersports-River-Cruise-Activities.pdf",
    "icon": "kayak"
  },
  {
    "id": "find-38",
    "category": "Out & about",
    "title": "Surfing",
    "text": "Surfing features among Goa’s listed water activities.",
    "source": "https://www.goa.gov.in/wp-content/uploads/2020/10/Circular-Safety-Hygiene-Guide-For-Watersports-River-Cruise-Activities.pdf",
    "icon": "surf"
  },
  {
    "id": "find-39",
    "category": "Out & about",
    "title": "Paddleboarding",
    "text": "Stand-up paddle surfing is listed among Goa’s water activities.",
    "source": "https://www.goa.gov.in/wp-content/uploads/2020/10/Circular-Safety-Hygiene-Guide-For-Watersports-River-Cruise-Activities.pdf",
    "icon": "surf"
  },
  {
    "id": "find-40",
    "category": "Out & about",
    "title": "Boating",
    "text": "Boating is one of Goa’s listed water activities.",
    "source": "https://www.goa.gov.in/wp-content/uploads/2020/10/Circular-Safety-Hygiene-Guide-For-Watersports-River-Cruise-Activities.pdf",
    "icon": "boat"
  },
  {
    "id": "find-41",
    "category": "Out & about",
    "title": "Cycling",
    "text": "Goa Tourism lists cycling experiences around villages and countryside.",
    "source": "https://bookings.goa-tourism.com/Appln/UIL/ActivitiesHome?__Mode=AC002%2F1000",
    "icon": "bike"
  },
  {
    "id": "find-42",
    "category": "Out & about",
    "title": "Birdwatching",
    "text": "Chorao’s Salim Ali Bird Sanctuary has mangrove habitats for birdwatching.",
    "source": "https://goa-tourism.com/wildlife/salim-ali-bird-sanctuary/",
    "icon": "bird"
  },
  {
    "id": "find-43",
    "category": "Out & about",
    "title": "Spice walks",
    "text": "Goa’s spice plantations offer walks to learn about crops and herbs.",
    "source": "https://www.goa.gov.in/what_to_see/plantations/",
    "icon": "leaf"
  }
];
