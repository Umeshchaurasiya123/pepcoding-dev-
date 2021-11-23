// in javascript object are alwase in key value pair
/*
empty object
let obj={}
console.log(obj)
//output {}
*/
// now let declere a big object
//each key value pair are seperated by , 
//format for key value is key: value

let cap={
first_name: 'steve',
last_name:'rogers',
friends:['bucky','tony stark','dr banner'],
isAvenger:true,
age:400,
addres:{
    state:'newyork',
    city:'brukly',
},
sayHI: function hi()
  {
      console.log("hi")
  }

}
//console.log(cap)

//output
/*
{
    first_name: 'steve',
    last_name: 'rogers',
    friends: [ 'bucky', 'tony stark', 'dr banner' ],
    isAvenger: true,
    age: 400,
    addres: { state: 'newyork', city: 'brukly' },
    sayHI: [Function: hi]
  }
*/
//--------------------------------------------------------------------
// now how to access object in key value pair
// 1 by dot notation
/*
console.log(cap.first_name)
console.log(cap.last_name)
console.log(cap.friends)
console.log(cap.friends[1])
console.log(cap.addres)
console.log(cap.addres.state)
console.log(cap.addres.city)
console.log(cap.sayHI())
*/
//output 
/*
steve
rogers
[ 'bucky', 'tony stark', 'dr banner' ]
tony stark
{ state: 'newyork', city: 'brukly' }
newyork
brukly
hi
*/

// 2 by braket notation-------------------------------------------------
/*
console.log(cap['age'])
console.log(cap['first_name'])
console.log(cap['addres'])
console.log(cap['addres']['state'])
console.log(cap['addres']['city'])
console.log(cap['sayHI'])
//console.log(cap['sayHI'])
*/
//output
/*
400
steve
{ state: 'newyork', city: 'brukly' }
newyork
brukly
[Function: hi]
*/

// to update an object -----------------------------------------------
/*
cap.isAvenger='false'
console.log(cap.isAvenger)
cap['isAvenger']='ture'
console.log(cap.isAvenger)
//output -----------------------------------------------------
false
ture
*/
//creating a new key value pair in object-----------------------------
/*
cap.movie=['avengers','civile wars','black panther','spiderman']
cap.gf='peggy carter'
console.log(cap)
*/
//output
/*
{
  first_name: 'steve',
  last_name: 'rogers',
  friends: [ 'bucky', 'tony stark', 'dr banner' ],
  isAvenger: true,
  age: 400,
  addres: { state: 'newyork', city: 'brukly' },
  sayHI: [Function: hi],
  movie: [ 'avengers', 'civile wars', 'black panther', 'spiderman' ],
  gf: 'peggy carter'
}
*/
//to delet any key value paire ----------------------
//to delete we use delete object_name.key
/*
delete cap.gf
console.log(cap)
*/
//output
/*
{
    first_name: 'steve',
    last_name: 'rogers',
    friends: [ 'bucky', 'tony stark', 'dr banner' ],
    isAvenger: true,
    age: 400,
    addres: { state: 'newyork', city: 'brukly' },
    sayHI: [Function: hi],
    movie: [ 'avengers', 'civile wars', 'black panther', 'spiderman' ]
  }

*/
/*
delete cap['sayHI']
console.log(cap)
*/
//output---------------------------------------------------------
/*
first_name: 'steve',
last_name: 'rogers',
friends: [ 'bucky', 'tony stark', 'dr banner' ],
isAvenger: true,
age: 400,
addres: { state: 'newyork', city: 'brukly' },
movie: [ 'avengers', 'civile wars', 'black panther', 'spiderman' ]
}
*/
//----------------------------------------------------------------------------
//special loop a
//for in loop

for(let key in cap)
//here key is our iterating variablr does not counsider is as keyword 
{
    console.log('keyes(cap)',key,'values(cap)',cap[key])
}
//here we have to note that we are passing cap[key] not cap['key']
//cap['key'] is wrong correct is cap[key]

//output---------------------------------------------------------------
/*
keyes(cap) first_name values(cap) steve
keyes(cap) last_name values(cap) rogers
keyes(cap) friends values(cap) [ 'bucky', 'tony stark', 'dr banner' ]
keyes(cap) isAvenger values(cap) true
keyes(cap) age values(cap) 400
keyes(cap) addres values(cap) { state: 'newyork', city: 'brukly' }
keyes(cap) sayHI values(cap) [Function: hi]
*/
