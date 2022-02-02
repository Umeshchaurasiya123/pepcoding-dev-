Function.prototype.myCall=function(){

let ourFun=this;// this step basically copy function fun to out fun
let ourArgs=Array.from(arguments)
let ourObject=ourArgs[0];
let ourParameters=ourArgs.slice(1)
//ourFun.apply(ourObject,ourParameters)
/*
let obj2={
    fname:"umesh chaurasiya",
    age:23

}
*/
// now we can add fun: function(){..} to our obj2 then from their we can  can call fun where this keyword repersenr obj2

ourObject.fun=ourFun;
// from here we add new keyvalue pair to our obj2 now time ti call it
ourObject.fun(...ourParameters);
 // ... basicaly conver [1,2,3,4,5,6,] to parametesrs such as 1,2,3,4,5,6

delete ourObject.fun

}

let obj2={
    fname:"umesh chaurasiya",
    age:23
}

let obj={
    fun:function(name1,name2){
       console.log("hi myself "+this.fname+" my age is="+this.age)
       console.log(" i am calling hi to "+name1)
       console.log(" i am calling hi to "+name2)
       console.log(arguments); 
    },
    
    fname:"sumit malik",
    age:34
}

//obj.fun.call(obj2,"abcd","efgh","pqrs")
 obj.fun.myCall(obj2,"vinay","yes","nice")

