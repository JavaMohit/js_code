const accountId=23456;//unchangable 
let accountEmail="mohit@gmail.com"//change or use with in a block
var accountpassword="23456"//its scope is global we declare anywhere in the program and modify this in any where;
accountCity="Bihar"//in java script we deaclare a variable without datatype its possible but we don't use;

//accountId=23457;//immutable dataType
//console.log(accountId);//TypeError: Assignment to constant variable.
accountEmail="mohit123@gmail.com";//mutable dataType
console.log(accountEmail);

accountpassword="98765"
accountCity="pune";

//new wat to display console
console.table([accountId,accountEmail,accountpassword,accountCity]);
/*
we use always let 
because var is security less data type any one chage its value;
*/