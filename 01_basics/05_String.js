const name = "Vikash"
const repoCount = 12

//console.log(name +repoCount + " Value");  // it is kind of boring and outdated and not looks good to see.

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String('Vikash-vk-com')

// console.log(gameName[0]); // To get the value of string at 0th index
// console.log(gameName.__proto__);  //To access the proto fucntion to get more details of the string

// console.log(gameName.toUpperCase()); // We can use much more functio like this to get more data of the String
// console.log(gameName.charAt(2)); // To get the character at the 2nd index

//console.log(gameName.indexOf('s'));  // To get the index of character 's'

const newSting = gameName.substring(0, 4) // Cant give negetive values and get the fixed section of the string
//console.log(newSting);

const anotherSting = gameName.slice(-8, 4) // Can give negetive valuse and get the reverse order also
//console.log(anotherSting);

const newStingOne = "  Vikash   "
//console.log(newStingOne);
//console.log(newStingOne.trim());

const url = "http://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'));

//console.log(url.includes('esh'));

console.log(gameName.split('-')); // to get substring as array


