const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swipt: "Swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const program = ["js", "rb", "py", "java", "cpp"]

for (const key in program) {
    //console.log(program[key]);
}

// Map is not at all irrateable
// const map = new Map()
// map.set('In' , "India")
// map.set('USA' , "United States of America")
// map.set('UK' , "United Kingdom")

// for (const key in map) {
//     console.log(key);
// }