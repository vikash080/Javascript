//var c = 300
let a = 300
//  "{}" This is scope
if(true) {
    let a = 10
    const b = 20
    //console.log("Inner: ",a);
}



//console.log("Global: ", a);
//console.log(b);
//console.log(c);


function one() {
    const username = "Vikash"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    
    two()
}
// one()

if(true) {
    const username = "Vikash"
    if(username === "Vikash") {
        const website =  "Youtube"
        //console.log(username +" "+ website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++**********+++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


const addTwo = function(num) {
    return num +2
}
console.log(addTwo(5))
