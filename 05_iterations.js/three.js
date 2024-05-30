// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps 
const map = new Map()
map.set('In' , "India")
map.set('USA' , "United States of America")
map.set('UK' , "United Kingdom")

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':- ' , value);
}

const myObj = {
    'Game1' : "nfs",
    'Game2' : "gta",
}

// for (const [key, value] of myObj) {
//     console.log(key, ':- ' , value);
// }