//var vs let
//var is function scop
// let is block scop
console.log(a)
var a;
console.log(a)
a=10
console.log(a)

// output 
//undefined
//undefined
//10
// now 
/*
console.log(b)
let b;
console.log(b)
b=10;
console.log(b)
*/
// error 
//Cannot access 'b' before initialization
// it is also called temoral dead zome



/*
var a=10;
console.log(a)
var a=20;
console.log(a)
*/
// output
//10
//20
/*
// relecrelation is not allowed
let a=10;
console.log(a)
let a=20;
console.log(a)
*/
//error
//SyntaxError: Identifier 'a' has already been declared

