
// function cab be passed to another function as variable

function outer (params) {
    console.log(" outer function ")
    params()
}

function chotafunction(){
    console.   
    log("chota function")
}
outer(chotafunction)

// function can be store in variabls also called function expression

let ans=function demo(name) {
    return name
}
console.log(ans(5));

//3rd gunction returning another function

function out(){
    console.log("out function ")
    return function funreturnfun(){
            console.log("function returning another function")
    }
}

let anss= out()
console.log(anss)
anss()

// output --------------------------------------------------------------------------

//outer function 
//chota function
//5
//out function
//[Function: funreturnfun]
//function returning another function
