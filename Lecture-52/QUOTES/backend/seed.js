const mongoose = require("mongoose");

const Quotes = require("./models/Quote");

let dummyArray = [
  { author: "samarth", text: "hello from samarth vohra" },
  { author: "indian", text: "mera bharat mahaan tha hai aur rahega" },
  {
    author: "Mahatma Gandhi",
    text: "You must be the change you wish to see in the world",
  },
];

async function seedDB() {
  await Quotes.insertMany(dummyArray);
  console.log("DB Seeded");
}

module.exports = seedDB;
