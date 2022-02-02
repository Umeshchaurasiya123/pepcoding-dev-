//  implemanting array.filter(function name)
/*
Array.prototype.sayhi=function(){

console.log("hello "+this)
// here this represent current eleemt of array
}

let arr=[1,2,3]
arr.sayhi()
//output hello 1 ,2 ,3
note ordening matters
*/
// now implementing filter function by its own

Array.prototype.myFilter=function(name) {

    let arr=[];
    for(let i=0;i<this.length;i++){
        if(name(this[i])==true){
            arr.push(this[i]);
        }
    }
    return arr;
}

function checkodd(name){
    if(name%2==1)
    return true;
}
function checkeven(name){
    if(name%2==0)
    return true
}

let arr=[1,2,3,4,5,6,7,7,8,9,10,11,12]
let answer1=arr.myFilter(checkodd)
let answer2=arr.myFilter(checkeven)
console.log(answer1)
console.log(answer2)
