
let array1=[1,2,100,90];
let array2=[1,3,100,50,123];
/*
for(let i=0;i<array2.length;i++)
{
    let element=array2[i];
    console.log(element)
    let counter=0;
    for(let j=0;j<array1.length;i++)
    {
        if(element==array1[j]){
            counter++;
            break;
        }
    }
    if(counter==0){
        array1.push(element)
    }
}
console.log(array1)
*/

for(let i=0;i<array2.length;i++)
{
let celement=array2[i];

let ispresent=array1.includes(celement)

if(ispresent==false)
{
    array1.push(celement)
}

} //for loop end here
console.log(array1)








