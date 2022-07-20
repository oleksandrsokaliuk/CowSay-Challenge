const info = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `
  ${info.name}, 
  ${info.campus}`,
  })
);
