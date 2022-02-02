// here we create polyfill for map function

Array.prototype.myMap=function(name) {

    let ans=[];
    for(let i=0; i<this.length; i++)
    {

        let celement=name(this[i])

        ans.push(celement)
    }
    
    return ans;
}

function square(name){
    return name*name
}

function cube(name) {
    return name*name*name
}

let arr=[1,2,3,4,5,0,1,2,3,.5]

let answer=arr.myMap(square)
console.log(answer)

let result=arr.myMap(cube)
console.log(result)

// note order matteer first we havee to defime function Array.prototype.functionname=function()
//later function which we pass to as parametet then array then callling 
