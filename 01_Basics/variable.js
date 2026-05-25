const accountId = 1234567890;
let accountemail = "debanjan@gmail.com";
var accountpassword = "debanjan1234";
accountcity = "Kolkata";
let accountstate;

// accountId = 2; // not allowed

accountemail = 'deb@gmail.com';
accountpassword = 'deb1234';
accountcity = 'Delhi';

/*
prefer not to use var and use let instead of var and const instead of let
*/


console.log(accountId);
console.table([accountemail, accountpassword, accountcity, accountstate]);
