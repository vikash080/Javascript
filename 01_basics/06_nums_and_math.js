const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString()); //To convert the number to String

//console.log(balance.toFixed(2)); //To get the value fixed to 2 decimal point

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'));

//console.log( Number.MAX_VALUE) // Max value of number in Js
//console.log( Number.MIN_VALUE) // Min value of number in Js

//************************************************** 

// console.log(Math.abs(-4)); //  4
// console.log(Math.round(4.8));// 5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,5,3,1,6));

console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10)) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)