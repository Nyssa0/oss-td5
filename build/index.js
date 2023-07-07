// const getRandomNumber = require('../index')
const getFestivals = require("../index");
const summerFestivals = require("../index");
const getFestivalsWithLocation = require("../index");

// (async() => {
//     console.log(await getFestivals())
// })()

// (async() => {
//     console.log(await summerFestivals())
// })()

(async() => {
    console.log(await getFestivalsWithLocation())
})()

