// array.filter(function name)

// if true to alloer karage nati to nahi

let array=[1,2,3,4,5,6,7,8,9,10]

function oddtest(number){
     return number%2==1
}
    
    

function eventest(number){
    if(number%2==0){
        return  number;
        // it is writing true
    }
}
let evenarray=array.filter(eventest)
console.log(evenarray)
let oddarray=array.filter(oddtest)
//let evenarray=array.filter(eventest)
//console.log(eventest)
console.log(oddarray)
console.log(array)


/*
[
    undefined, 2,
    undefined, 4,
    undefined, 6,
    undefined, 8,
    undefined, 10
  ]
  [ 1, 3, 5, 7, 9 ]
  [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ]
  */