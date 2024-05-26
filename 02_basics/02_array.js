const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "batman"]

// PUSH operation
//marvel_heros.push(dc_heros) // Add the array as a element
// console.log(marvel_heros);


//Concat Operation
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// SPREAD operation
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Vikash")) // false
console.log(Array.from("Vikash")) // [ 'V', 'i', 'k', 'a', 's', 'h' ]
console.log(Array.from({name: "Viksh"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));