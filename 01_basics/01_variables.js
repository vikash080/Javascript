const accountId = 144553
let accountEmail = "vikash@google.com"
var accountPassword = "12345"// never use normally
accountCity = "Ranchi"// Can use but not a great way to use a variable
let accountState;

//accountId = 2 // not allowed
accountEmail = "abc@abc.com"
accountPassword = "212121"
accountCity = "Assam"

console.log(accountEmail);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);