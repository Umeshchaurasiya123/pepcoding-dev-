
let member=[{
    gender:'m',
    age:20,
    salary:200
},
{
    gender:'f',
    age:25,
    salary:100
},
{
    gender:'m',
    age:20,
    salary:70
},
{
    gender:'f',
    age:30,
    salary:50
}]

//find if income less then 100 then double it 
/*
function doubleincome(number){
    let income=number.salary
    if(income<100){
        number.salary*=2
    }
    return number;
}
*/

//new mumber object after doubling their salary
//let ans=member.map(doubleincome)
//console.log(ans)

// old member arra
//console.log(member)

//output
/*
{ gender: 'm', age: 20, salary: 200 },
  { gender: 'f', age: 25, salary: 100 },
  { gender: 'm', age: 20, salary: 140 },
  { gender: 'f', age: 30, salary: 100 }
]
[
  { gender: 'm', age: 20, salary: 200 },
  { gender: 'f', age: 25, salary: 100 },
  { gender: 'm', age: 20, salary: 140 },
  { gender: 'f', age: 30, salary: 100 }
]
*/
// output suggesr that change happenf in original array
//note in case of primitive data type change happend in shallo copy that is pass by value happed
// but in case of user defind data type change hapend in actual object that is pass by referen happend

// so to avoid that we we are goingto create copy of oroiginal and make chage on them
function doubleincome(number){

    // method 1
    let obj={...number}
    //method 2
    /*
    let obj={};
    for(let keys in number){
        obj[keys]=number[keys]
    }
    */
    if(obj.salary<100){
        obj.salary*=2
    }
    return obj;
}
console.log(member)
//old array
// remeber in casse of primitive data type copy of data is passed  but for non primituve 
// data type refrence is passed
let ans=member.map(doubleincome)
console.log(ans)

//
console.log(member)



