const figlet = require("figlet");
var colors = require('colors');

figlet("Samarth", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
//   console.log(data);
});