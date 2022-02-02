
// arr.reduce(function name)

let arr=[1,2,3,4]

//let ans=arr.reduce(product)
//console.log(ans)
//let total=arr.reduce(sum)
//console.log(total)

function product (name1, name2) {
    console.log("storage= "+name1+" element= "+name2)
    return name1*name2
}

function  sum(name1,name2) {
    console.log("storage= "+name1+" element= "+name2)
    return name1+name2
}
// here reduce use two pointers 1st point to 0 th element and 2nd point to 1st element
//and it is keep go incresing till last element
//type 2
//storage mai inical value apni margi sai lege

let final=arr.reduce(product,10)
console.log(final)
//output 
//storage= 10 element= 1
//storage= 10 element= 2
//storage= 20 element= 3
//storage= 60 element= 4
//240
//so here storage is 10 ans element is 0th element not first  of array that is 1


