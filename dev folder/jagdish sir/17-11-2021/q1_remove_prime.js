
// remove prime without using extra space

 //arr.splice(index , number) remove perticular eleemt from that indexting till number , number repesent how many of them 

// in case of splice() change happend in main array;
// but in case of slice change does not reflect in original  array
let arr=[5,7,19,22,13,14]
console.log(arr)
for(let i=0;i<arr.length;i++){

    let celement=arr[i];

    if(isprime(celement)){
        arr.splice(i,1);
        i--;
    }
}

console.log(arr);

function isprime(number)
{
    for(let j=2;j*j<=number;j++){
        if(number%j==0){
            return false
        }
    }
    return true;
}

