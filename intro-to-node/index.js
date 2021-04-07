var superheroes = require("superheroes"); // import module
var supervillains = require("supervillains");

var myHero = superheroes.random();
var villainToFight = supervillains.random();

console.log(`${myHero} is battling ${villainToFight}!`);