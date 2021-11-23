//variable declartion with let var and const

// var abcd;//first the variable is initialized
// with undefined value
//here undefinded is data type 
//type of data type in java script is null, undefiend,
//Boolean,String,Number this is primitive data type 
//Array,Object,function, are refrence ddata typeof.
//java script can run in browser with the help of browser enginge 
//or in local machine with the help of node js
//note : content of javascript can be put inside <script></script> tag 
// or inside javascipt file that is which end with .js
//and you can link those javascrip file with the help of source attribute inside <script> tage

// var a = 20
// console.log(a)
// a = 'Hello'// Dynamic Behaviour of JavaScript means
// we does not need to specify 
//the data type of variable

// a = null
// a = true
// console.log(a)
//JavaScript is a Synchronus Language and a single threaded language


// let and const 
//var keyword had certain problem
// first Problem with var - Redecalration


// var b = 2
// console.log(b)
// var b = 'I am a string'
// console.log(b)

// var keyword allows us to redeclare a variable

// let b = 2
// console.log(b)
// let b = 'I am a string'
// console.log(b)
//here we gwt error that identifyer b already declear


// let keyword does not allows us to redeclare a variable



// loops and if else

// let flag = true
// var num = 13

// for(let i = 2 ; i*i<=num ; i++){
//        if(num%i==0){
//               flag = false
//                console.log('not prime',num)
//               break
//        }

// }

// if(flag){
//        console.log(num ,'is Prime')
// }


//2nd Problem with var- scoping - function scoping and block scoping

// if(10%2==0){
//     var c = 2
//     console.log(c)   
// }

// console.log(c)

//var is function scoped

//same code with let

// if(10%2==0){
//        let c = 2
//        console.log(c)   
//    }
   
//    console.log(c)
//here we get an error

//Let is blocked scope

// let a = 2
// let a = 3 // not allowed redcalring


// let a = 2
// a = 3 // allowed re assinging

//const a=2
//console.log(a)



//--xx--Environment , variables(let , var and const), loops , if else , problems with var --xx--


//Strings and string methods--
//decleate and inicialize a variable with str name
let str = 'pepcoders'
//console.log(str)

// string Methods-
// 1 .length
//console.log(str.length) 
//gives length of string


//extracting a part of string - slice , substr
//to extract part of string we user slice() and substr()
//2 slice(start , end) - returns sliced array 
//from starting index to ending-1
// let slicedStr = str.slice(3 ,7) // last index is excluded
// console.log(slicedStr)
//note in java substring and in javascript slice method all do the same work

//substr method
//substr(start , length) - staring and the length of the word
// let subString = str.substr(3 , 4 )
// console.log(subString)
//output code iee 3rd  4th 5th 6th wrold


// 3 replace method - expects the word to be replaced as first argument
// and the replacing word as  as second argument 

// let sayHello = 'Hello Mukesh'
// console.log(sayHello) // Hello Mukesh

// let sayBye = sayHello.replace('Hello' , 'bye')
//here we replacing 'Hello' with 'bye'
// console.log(sayBye) // Bye Mukesh

// 4 4toUppercase  and toLowerCase

// let text1 = 'Hello World'
// let text2 = text1.toUpperCase()
// console.log(text2)

// let text1 = 'Hello World'
// let text2 = text1.toLowerCase()
// console.log(text2)


//concatenation method
//.concat()

//let firstStr = 'Hello'
//let secondStr = 'World'

//let concatenatedStr = firstStr.concat(' ' ,secondStr)
//let conc=firstStr.concat(secondStr)
//console.log(concatenatedStr)
//here output is Hello Wrold
//console.log(conc);
//here output is HelloWrold

// Trim Method
//.trim()
// let text = '   Hello World      '
// console.log(text)
// let trimmedText = text.trim()
//output is remove all the space from start and end 
//inbetin splace remain as itis

// console.log(trimmedText)
