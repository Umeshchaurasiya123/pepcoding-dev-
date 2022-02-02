
// diffrence bet fun expression and decleration
// remenber when funnction name is not their and it is store in variablr then it is 
//function expressiojn
//1
/*
fun();
var fun=function() {
    gun() 
}

var gun=function(){
    console.log(" i am inside gun")
}
*/
// output fun is not a function
// remember memeory first allocte to function definition then variable so first 
// var fun and var gun=undefied in fun and gun variable
// now excution start from top to bottom
// so fun is called but fun contain undefiend so it print error 
//same happend to all thsi function as well

//---------------------------------------------------------------------------
/*
var fun=function() {
    gun() 
}
fun()
var gun=function(){
    console.log(" i am inside gun")
}
// output gun is not a function
//---------------------------------------------------------------------------
*/
/*
var fun=function() {
    gun() 
}

var gun=function(){
    console.log(" i am inside gun")
}

fun();
// output  i am inside gun
*/
