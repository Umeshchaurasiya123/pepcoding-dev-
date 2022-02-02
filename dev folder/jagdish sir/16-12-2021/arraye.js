let array=[1,2,3,'abcd',"umesh"]
console.log(array)

// to find length
console.log(array.length)
// to traverse 

for(let i=0;i<array.length;i++){
    console.log(array[i])
}

// push and pop
console.log(array.pop())

console.log(array.push(100));
console.log(array)

//add eleemt to first and last of an array
// for this we use .shift .unshift
//remove first
array.shift()
console.log(array)
//add element to first index

array.unshift(101)
console.log(array)

// .slice method  here change not happen in main array
// .slice(starting index, endomg insex+1) will print from start to end index
let copyofarray=array.slice(1,3)
console.log(copyofarray);
console.log(array)

//.splice() method here our array change originally
//.splice(stating index, no of elenent waht to extract)
let contentofarray=array.splice(1,2);
//console.log(contentofarray)
//console.log(array)





