const user  = {
    username : "Vikash",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to this website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
//____________________________________________________
// 
// function chai() {
//     let username = "Vikash"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "Vikash"
//      console.log(this.username);
// }

// chai()

// "=>" arrow Function

const chai = () => {
    let username = "Vikash"
     //console.log(this);
}

chai()

// const addTow = (num1 , num2) => {
//     return num1+num2
// }

// console.log(addTow(3,4))

//  Implicit return***

// const addTow = (num1 , num2) => num1+num2

// const addTow = (num1 , num2) => (num1+num2)


const addTow = (num1 , num2) => ({ username : "Viksh"})

console.log(addTow(3,4))

// const myArray = [2,6,3,2,6]

// myArray.forEach()