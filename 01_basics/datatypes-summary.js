// Primitive datatypes

// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false //boolean
const outsideTemp = null // Object
let userEmail; //String
userEmail = "test@gmail.com"

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol
//console.log(id === anotherId);

const bigNumber = 234234243243223n // BigInt


// Referance Type OR Non-Primitive type

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"] // Objects
let myObj = {
    name: "Vikash",
    age: 22,
}// Objects

const myFunction = function () { // Object Function
    console.log("Hello world");
}

console.log(typeof outsideTemp)


// ******************************************************

//Stack (Primitive) , Heap (non-Primitive)

let myYoutubename = "vikashkumardotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "vikash@google.com"

console.log(userOne.email);
console.log(userTwo.email);