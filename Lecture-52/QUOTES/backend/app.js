const express = require("express");
const app = express();
const mongoose = require("mongoose");
const quotesRoutes = require("./apis/quotesRoutes");
const seedDB = require("./seed");
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1:27017/gian")
  .then(function () {
    console.log("DB CONNECTED");
  })
  .catch(function (err) {
    console.log(err);
  });

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome to backend");
});

// seedDB();

app.use(quotesRoutes);

let PORT = 8000;
app.listen(PORT, function () {
  console.log(`Backend server at port: ${PORT} `);
});
