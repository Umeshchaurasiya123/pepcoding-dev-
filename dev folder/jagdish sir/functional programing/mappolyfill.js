
// impletation of map function by it own
let arr=[1,2,3,4,5]

function squar(number){
    return number*number
}

function map(arr,cb){
let newarr=[]

for(let i=0;i<arr.length;i++){
  newarr[i]= cb(arr[i])
}
return newarr;
}

console.log(arr)

let ans=map(arr,squar)
console.log(ans)


