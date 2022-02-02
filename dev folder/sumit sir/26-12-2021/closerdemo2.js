function PowerFuntionCreator(obj){

    if(typeof obj.exp!=='number'){
        console.log("exp must be a number")
        return null;
    }

    let powerFn=function(base){
        let rv=Math.pow(base,obj.exp);
        return rv;
    }
    return powerFn

}

let obj={
    exp:2,
}


let square=PowerFuntionCreator(obj);
let sqo8=square(8);
console.log(sqo8)

 // is baar closer me object aayaa ,obj is bbar bahar defiend  hai so ham us ko ched saktai thai.

obj.exp=3
let cuo8=square(8)
console.log(cuo8)
