const userInfo = require("./information");
console.log(userInfo.name + " " + userInfo.campus);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm " + userInfo.name + " from " + userInfo.campus + " Campus meuh.",
    e : "oO",
    T : "U "
}));
