# Festival package

# Introduction
The purpose of this package is to browse through French festivals.

# Get random number
This is a package

## Local development
```
npm install
```
```
npm run test
```

To test the functions, you can create a 'build' directory with an 'index.js' file.
In this file, you can just write this code
```js
const getFestivals = require("../index");
(async() => {
    console.log(await getFestivals())
})()
```

## Functions

### getFestivals
Lists 1000 festivals

### summerFestivals
Lists summer festivals that happen in June, July, August or September

### getFestivalsWithLocation
If given a region, it lists the festivals of that chosen region