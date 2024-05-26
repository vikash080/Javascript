// Dates

let myDate = new Date()
// console.log(myDate.toDateString()); // Sun May 26 2024
// console.log(myDate.toLocaleString());  // 26/5/2024, 11:41:08 am
// console.log(myDate.toLocaleDateString()); // 26/5/2024
// console.log(myDate.toTimeString()); // 11:41:08 GMT+0530 (India Standard Time)

// console.log(typeof myDate); // Object

//  Months in JS starts with " 0 " ***
let myCreatedDate = new Date(2023, 0 , 23)
//console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myDateTime = new Date(2024, 6,15 , 18 ,20)
//console.log(myDateTime.toLocaleString()); // 15/7/2024, 6:20:00 pm

//In DD-MM-YYYY because it is not a arrya numbers will start from "01" not "0"
//let newDate = new Date("2024-01-04") // 4/1/2024, 5:30:00 am

let OneDate = new Date("01-04-2024")
//console.log(OneDate.toLocaleString()); //4/1/2024, 12:00:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(OneDate.getTime());

//Convert milli seconds to seconds
//console.log(Math.round(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday:"long"}))