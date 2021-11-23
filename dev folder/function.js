//creating a function
//to add  two number with paramenters
//function add(a,b)
//{
//console.log(a+b)
//}
//add(2,3)
//function with return
//function addn(a,b)
//{
  //  return a+b
//}
//let sum=addn(3,4)
//console.log('the sum is',sum)
/*
function add()
{
  console.log("hello")
}
add()
*/
//in javascript function are know as 1st classs citizen 
//here function is write without an name
//i.e you can tret function as variable in javascript
/*
this is illegal
let sayhi=function abcd(){
    console.log('hi')
}

console.log(sayhi)
console.log(abcd())
*/
//------
/*
//correct is
//it is also called fuction expresion
let sayHi=function()
{
  console.log("sayhi")
}

//now to call thsi function we use variable name with ()
sayHi()
*/
//another example
/*
let sum=function(a,b)
{
      console.log(a+b)
}
sum(20,20)
*/
//here variable aree storing function that 
//why this type of function also call anonmus function


//iife imeddiatly invoked function expression
//means jaha mai function declare kiya hai wahi sai call bhi kar rahe hai 
/*
let add=(function (a,b)
        {
            return a+b
        })(10,20)
console.log( add)
*/
/*
let add1=(function (a,b)
        {
            console.log(a+b,"hello")
        })(10,20)
add1
*/









