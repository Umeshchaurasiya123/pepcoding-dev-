
// remove prime without using extra space

 //arr.splice(index , number) remove perticular eleemt from arr and number repesent how many of them 

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

