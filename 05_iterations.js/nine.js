const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval , 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "Py course",
        price : 999
    },
    {
        itemName : "Mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const priceToPay =shoppingCart.reduce((acc,item) => (acc + item.price), 0)

console.log(priceToPay);