const accountId = 204323
let accountName = "Shubham Nagoriya"
let accountEmail = "shubham@gmail.com"
let accountCity = "Indore"
let accountState;

// Avoid to use "var" to declair variables in Javascript due to block and functional scope issue
// We can also declaire variables withour "let" or "var" but it should be avoided by the programers

console.log(accountId);

console.table([accountId, accountName, accountEmail, accountCity])