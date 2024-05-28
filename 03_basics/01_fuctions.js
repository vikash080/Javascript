
function sayMyName()
{
    console.log("H");
    console.log("I");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2) {
//    
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2) {

    // let result = number1 + number2
    // return result  // return is the last line of the code we can not exicute anything after this
    return number1+number2
}


// addTwoNumbers(3,4)  // 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") //3a
// addTwoNumbers(3,null) // 3

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {

    if(!username)  //  same as username === undefined
        {
            console.log("Please Enter a Username");
            return
        }

    return `${username} just logged in`
}
// console.log(loginUserMessage("Vikash"))

function calculateCartPrice (val1, val2, ...num1) { ///  "..." is a rest operater creates a array of values
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "Vikash",
    price : 99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user) // Type I
handleObject({
    username : "Vikash",
    price : 99
})

const newArray = [200,300,400,599]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,700,400,500]));