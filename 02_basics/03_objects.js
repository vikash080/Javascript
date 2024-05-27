// singleton

// Object.create  // crated as constructer creats singleton objects

// object literals 

const mySym = Symbol("Key1")
const JsUser = {
    name: "Vikash",
    "full name": "Vikash Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Ranchi",
    email: "vikash123@gmail.com",
    isLoggedIn: false,
    lastLofinDays: ["Monday", "sunday"] // name is string type now
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vikash.chat.com" // This is how to overwrite the values of the object
//Object.freeze(JsUser) // Now we can not chage the values of the object using freeze
JsUser.email = "Vikash.123.com"
//console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello Js user");
}

//console.log(JsUser.greeting); //[Function (anonymous)]
//console.log(JsUser.greeting());

JsUser.greeting2 = function () {
    console.log(`hello Js user , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());