const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swipt : "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}