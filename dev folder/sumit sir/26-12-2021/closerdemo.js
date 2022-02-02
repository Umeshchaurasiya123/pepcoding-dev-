function PowerFuntionCreator(exe){

    if(typeof exe!=='number'){
        return null;
    }

    let power=function(base){
        let rv=Math.pow(base,exe);
        return rv;
    }
    return power

}

let square=PowerFuntionCreator(2);
let sqo8=square(8);
console.log(sqo8)

