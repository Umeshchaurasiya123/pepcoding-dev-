
function fn() {
    console.log(arguments)
}
function  fn(a,b) {
    return a+b;
}
console.log(fn(2,3,4,5))

function fn(x,y,z,w) {
    return x+y+z+w    
}
console.log(fn(2,3,4,5))

// output 
//14
//14

//execution in java script
//1 memory allocation 
//1 function definition kai lia memory allocation hota hai
// variable kai lia undefined allocate hota hai 
//2
//code execution
// code execution start from top to bottom

// yai sara kam bubble mai hota hai jise exccution context  kahtai hai 

//exection context created when we call any function

// the default execution context is called global execution context

// ------------------------------------------------------------------------------------------------------------

var a;
a=10;
function fb() {
    console.log("before decleration ",a)

var a;
console.log("after decleration",a)
a=20
console.log("After inicialization",a)
}

fb()

//output
//before decleration  undefined
//after decleration undefined
//After inicialization 20
// here firsst memory allocated to function then memory 
// then our function is called and local  exution block is create  and execition start

// so suppose fb get 8k address in heap then variable a get undefined
// now function is called
//so at 38 line we get undeifend 
// similarly at 41 we get undefind
// now 20 assiendd to a 
// then it print 20

//----------------------------------------------------------------------------------------

