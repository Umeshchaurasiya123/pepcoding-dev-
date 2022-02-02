/*
function sayhi(name) {

    console.log("print ",name)

}
// call by valye
sayhi("string")
// call by value
sayhi(true)

// call by reference
sayhi([1,2,3,4,5,6,7,8])
// call by reference
sayhi({name:"jasbirsir"})


*/
// type of function 

//  simpele function 

function ssd() {
    console.log("hi all")
}

ssd()


// function expresion
//here we are storing function in variable
// when function is pass as a argument in function then it is called higer order function 

let secoundfn=function secoundfunction() {
                console.log("functon expression")
                }
secoundfn();

// funciion expresion with anonmus function
let res=function() {
    console.log("hi")
}
res()


// imp $$$$$ imediatly invoked function expression

// matlab bantai hi call ho gai ga

let name= (function abcd() {
    console.log("hi all with iife")
})(); 

// Anonmus functioon or function without name nut also iife 
(function() {
    console.log("hi all with iife in 2nd function")
})(); 

// output
//hi all with iife
//hi all with iife in 2nd function

