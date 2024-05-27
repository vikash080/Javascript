//const tinderUser = new Object() //singleton object
const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "vikas.web.com",
    fullname: {
        userfullname : {
            firstname: "vikash",
            lastname: "Kumar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "c", 4: "d"
}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2) // by using {} we can provide an empty object to merge more than one object rather than storing into any one of the objects

const obj3 = {...obj1, ...obj2} //Better to use this for the same result
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@sdf.com"
    },
    {
        id: 2,
        email: "i@sdf.com"
    },
    {
        id: 3,
        email: "j@sdf.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin')); // to check is the property avilable or not

