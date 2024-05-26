// Arrays

const myarr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "naggraj"]

const myArr2 = new Array(1,2,3,4)

//console.log(myarr[0]); // '0'

// Array methods

// myarr.push(6) // To add a new number to the array
// myarr.push(7)
// myarr.pop()


// myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(4)); // Will return true as a bollean
// console.log(myarr.indexOf(3));

// const newArr = myarr.join()

// console.log(myarr);
// console.log(newArr);


//**********  Slice and Splice *********
// Slice is use to get the piece of data from the array
// Splice is use to extract those date in full range and give it as output rest of the element remains in the array.
console.log("A ", myarr);
const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log("C ",myarr);
console.log(myn2);