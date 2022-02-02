//obj.fun.apply(obj2,["umesh","Mukesh","Mohan"])
Function.prototype.myApply=function(){

let ourFunction=this
let ourArgArr=Array.from(arguments)
let ourObject=ourArgArr[0];
let ourParameters=ourArgArr[1]

//ourFunction.call(ourObject,...ourParameters)

ourObject.fun=ourFunction

ourObject.fun(...ourParameters)

delete ourObject.fun

}

let obj2={
    fname:"umesh chaurasiya",
    age:23
}

let obj={
    fun:function(name1,name2,name3){
       console.log("hi myself "+this.fname+" my age is="+this.age)
       console.log(" i am calling hi to "+name1)
       console.log(" i am calling hi to "+name2)
       console.log("I am calling hi to "+name3)
       console.log(arguments); 
    },
    
    fname:"sumit malik",
    age:34
}


//obj.fun("vibay","barun")
obj.fun.myApply(obj2,["umesh","Mukesh","Mohan"])

