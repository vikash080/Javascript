// const userEmail = []

// if (userEmail) {
//     console.log(`got user email`);
// }
// else{
//     console.log(`Dont hava a email`);
// }

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy values
// "0" , 'false' , " " . [] , {} , function(){}

// if(userEmail.length === 0){
//     console.log(`Array is emplty`);
// }

// const emptobj = {}

// if (Object.keys(emptobj).length===0) {
//     console.log(`Object is empty`);
// }


// Nullish Coaliescing Operater (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator

// consdition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less than 80 `) : console.log(`more than 80`);