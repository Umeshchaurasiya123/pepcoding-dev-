
function outer(first){
    console.log("Inside other")
    return function inner(secound){
        return first*secound;
    }
}

let ans=outer(4)
console.log("Before calling val that contain inner")
let out=ans(5)
console.log(out)

// note memory ALwase  allocated  to function in heap
// note first memeory allocated to function and variables
// so memory allocated to outer  and  ans and out as undefind
// now outer(4) first called 
// it will print inside other
// then it will return inside function to ans
//now ans(5) will card i.e inner(5)
// it will 5*4 =20
// note that our function outer is pop out from stack  whenr it inconter retunr then how it is accesing first variable 
// it is only because of closer
// because of closur it is stor in first and then inner function can able to aceees it

// beacuse of closure ager bahar wala function stack sai hat bhi jai tab bhi ander wale function ko bahar wale function ka access hota hai 

// output

//Inside other
//Before calling val that contain inner
//20

